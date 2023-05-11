<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            v-model="newflitContent"
            class="new-flit"
            placeholder="What's happening?"
            maxlength="280"
            bottom-slots
            counter
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://s.gravatar.com/avatar/bc852ebbe34de6ccebb6fef5ba88b28e?s=80">
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewflit"
            :disable="!newflitContent"
            class="q-mb-lg"
            color="primary"
            label="Flit"
            rounded
            unelevated
            no-caps
          />
        </div>
      </div>

      <q-separator
        class="divider"
        color="grey-2"
        size="10px"
      />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            v-for="flit in flits"
            :key="flit.id"
            class="flit q-py-md"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://s.gravatar.com/avatar/bc852ebbe34de6ccebb6fef5ba88b28e?s=80">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Sanyam Jain</strong>
                <span class="text-grey-7">
                  @sanyamj138
                  <br class="lt-md">&bull; {{ flit.date | relativeDate }}
                </span>
              </q-item-label>
              <q-item-label class="flit-content text-body1">{{ flit.content }}</q-item-label>
              <div class="flit-icons row justify-between q-mt-sm">
                <q-btn
                  color="grey"
                  icon="far fa-comment"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  color="grey"
                  icon="fas fa-retweet"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  @click="toggleLiked(flit)"
                  :color="flit.liked ? 'pink' : 'grey'"
                  :icon="flit.liked ? 'fas fa-heart' : 'far fa-heart'"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  @click="deleteflit(flit)"
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  flat
                  round
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',
  data() {
    return {
      newflitContent: '',
      flits: [
        // {
        //   id: 'ID1',
        //   content: 'Be your own hero, its cheaper than a movie ticket.',
        //   date: 1611653238221,
        //   liked: false
        // },
        // {
        //   id: 'ID2',
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat justo id viverra consequat. Integer feugiat lorem faucibus est ornare scelerisque. Donec tempus, nunc vitae semper sagittis, odio magna semper ipsum, et laoreet sapien mauris vitae arcu.',
        //   date: 1611653252444,
        //   liked: true
        // },
      ]
    }
  },
  methods: {
    addNewflit() {
      let newflit = {
        content: this.newflitContent,
        date: Date.now(),
        liked: false
      }
      // this.flits.unshift(newflit)
      db.collection('flits').add(newflit).then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      }).catch(function(error) {
        console.error('Error adding document: ', error)
      })
      this.newflitContent = ''
    },
    deleteflit(flit) {
      db.collection('flits').doc(flit.id).delete().then(function() {
        console.log('Document successfully deleted!');
      }).catch(function(error) {
        console.error('Error removing document: ', error);
      })
    },
    toggleLiked(flit) {
      db.collection('flits').doc(flit.id).update({
        liked: !flit.liked
      })
      .then(function() {
        console.log('Document successfully updated!')
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error)
      })
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  },
  mounted() {
    db.collection('flits').orderBy('date').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let flitChange = change.doc.data()
        flitChange.id = change.doc.id
        if (change.type === 'added') {
          console.log('New flit: ', flitChange)
          this.flits.unshift(flitChange)
        }
        if (change.type === 'modified') {
          console.log('Modified flit: ', flitChange)
          let index = this.flits.findIndex(flit => flit.id === flitChange.id)
          Object.assign(this.flits[index], flitChange)
        }
        if (change.type === 'removed') {
          console.log('Removed flit: ', flitChange)
          let index = this.flits.findIndex(flit => flit.id === flitChange.id)
          this.flits.splice(index, 1)
        }
      })
    })
  }
}
</script>

<style lang="sass">
.new-flit
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.flit:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.flit-content
  white-space: pre-line
.flit-icons
  margin-left: -5px
</style>

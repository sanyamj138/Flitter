<template>
  <q-page>
    <div class="q-py-lg q-px-md row q-col-gutter-md items-end">
      
      <div class="col">
        <q-input 
      class="new-flit"
      bottom-slots 
      v-model="newFlitContent" 
      placeholder="What's happening?" 
      counter 
      maxlength="300" 
      autogrow>

        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://s.gravatar.com/avatar/bc852ebbe34de6ccebb6fef5ba88b28e?s=80">
          </q-avatar>
        </template>
      </q-input>
      </div>

      <div class="col col-shrink">
        <q-btn 
        @click="addNewFlit"
           class="q-mb-lg"
          unelevated 
          rounded 
          color="primary" 
          label="Flit" 
          no-caps 
          :disable="!newFlitContent"
          />
      </div>
    </div>
    <q-separator size="10px" class="divider" color="grey-2"/>

    <q-list separator>
      <q-item  
      v-for="flit in flits"
      :key="flit.date" 
      class="q-py-md"
      >
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://s.gravatar.com/avatar/bc852ebbe34de6ccebb6fef5ba88b28e?s=80">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Sanyam Jain</strong>
            <span class="text-grey-7"> @sanyam_jan</span>
          </q-item-label>

          <q-item-label class="flit-content text-body1">
           {{ flit.content }}
          </q-item-label>

          <div class="flit-icons row justify-between q-mt-sm">
            <q-btn 
            size="sm"
            flat 
            color="grey" 
            round 
            icon="far fa-comment" />

            <q-btn 
            size="sm"
            flat 
            color="grey" 
            round 
            icon="fas fa-retweet" />

            <q-btn 
            size="sm"
            flat 
            color="grey" 
            round 
            icon="far fa-heart" />

            <q-btn 
            @click="deleteFlit()"
            size="sm"
            flat 
            color="grey" 
            round 
            icon="fas fa-trash" />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{ flit.date | relativeDate }}
        </q-item-section>
      </q-item>
    </q-list>

  </q-page>
</template>

<script> 
import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',
  data() {
    return {
      newFlitContent:  '',
      flits: [
        {
          content: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Sed feugiat justo id viverraconsequat. Integer feugiat lorem faucibus estornare scelerisque. Donec tempus, nunc vitae semper sagittis, odio magna semper ipsum,etlaoreet sapien mauris vitae arcu.',
          date: 1683249782836
        }, 
        {
          content: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Sed feugiat justo id viverraconsequat. Integer feugiat lorem faucibus estornare scelerisque. Donec tempus, nunc vitae semper sagittis, odio magna semper ipsum,etlaoreet sapien mauris vitae arcu.',
          date: 1683249833976
        }
      ]
    }
  },
  methods: {
    addNewFlit ( ) {
      let newFlit = {
        content: this.newFlitContent,
        date: Date.now()
      }
      this.flits.unshift(newFlit)
    },
    deleteFlit( ) {
    let dateToDelete = flit.date
    let index = this.flits.findIndex(flit => flit.date == dateToDelete)
    this.flits.splice(index, 1)
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  }
}

</script>
<style lang="sass">
.new-flit
  textarea
    font-size: 19px
    line-height: 1.5 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.flit-content
  white-space: pre-line

.flit-icons
   margin-left: -5px
</style>
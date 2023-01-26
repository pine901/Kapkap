<template>
  <div class="generator__tab-content generator__tab-content--pet">
    <div v-if="!isMobile" class="generator__options generator__options--tab3 container">
      <div class="generator__options-left" />
      <span class="generator__title">Dodaj postać lub zwierzę</span>
    </div>

    <div
      v-if="isMobile && !showEditModal"
      id="header_nav"
      class="generator__options generator__options--tab3 container justify-content-center"
      style="margin-top: -60px"
    >
      <span class="generator__title">Dodaj postać lub zwierzę</span>
    </div>

    <TheList
      v-if="!showEditModal && !showAddModal"
      @editItem="editItem"
      @openAddModal="openAddModal"
    />
    <AddModal
      v-else-if="showAddModal"
      @closeModal="closeModal"
      @newCupObject="newCupObject"
    />
    <EditHuman
      v-else-if="showEditModal && isHuman"
      :type="editedItemType"
      :edited-item="editedItem"
      @closeModal="closeModal"
    />
    <EditAnimal
      v-else-if="showEditModal && !isHuman"
      :type="editedItemType"
      :edited-item="editedItem"
      @closeModal="closeModal"
    />
  </div>
</template>

<script  lang="ts">
import { Action, Component, Getter, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { WorkingItem } from '~/store/cup/state'
import Picture from '~/components/Common/Picture.vue'
import AddModal from '~/components/Cup/ItemComponents/AddModal.vue'
import TheList from '~/components/Cup/ItemComponents/TheList.vue'
import EditHuman from '~/components/Cup/ItemComponents/EditHuman.vue'
import EditAnimal from '~/components/Cup/ItemComponents/EditAnimal.vue'

@Component({
  components: {
    EditAnimal,
    EditHuman,
    TheList,
    AddModal,
    Picture
  }
})
export default class ItemsChoice extends Vue {
  @Prop(Boolean) readonly editMode!: boolean

  @Getter('app/isMobile') isMobile!: boolean
  @Getter('cup/items') items!: WorkingItem[]

  @Action('cup/setItem') setItem!: Function

  showAddModal: boolean = false
  showEditModal: boolean = false

  addButtonGlowing: boolean = false

  editedItem: WorkingItem = {
    type: ''
  }

  editedItemType: string = ''

  get isHuman () {
    const humans: string[] = ['woman', 'man', 'boy', 'girl']
    return humans.includes(this.editedItemType)
  }

  @Watch('showAddModal')
  onChangeAddModal (value: boolean) {
    this.$emit('switchAddModal', value)
  }

  @Watch('showEditModal')
  onChangeEditModal (value: boolean) {
    this.$emit('switchEditModal', value)
  }

  mounted () {
    setTimeout(() => { this.addButtonGlowing = true }, 750)
  }

  newCupObject (type: string) {
    this.prepareView()

    this.editedItemType = type
    this.editedItem = { type, name: '' }

    this.showAddModal = false
    this.showEditModal = true
  }

  prepareView () {
    const bottomNavbar: any = document.getElementById('bottom_navbar')
    if (bottomNavbar !== null) {
      bottomNavbar.style.setProperty('display', 'none', 'important')
    }

    const headerNavbar: any = document.getElementById('header_nav')
    if (headerNavbar !== null) {
      headerNavbar.style.setProperty('display', 'none', 'important')
    }
  }

  editItem (item: WorkingItem) {
    this.editedItemType = item.type
    this.editedItem = item
    this.showAddModal = false
    this.showEditModal = true
  }

  openAddModal () {
    this.showAddModal = true
  }

  closeModal () {
    const bottomNavbar: any = document.getElementById('bottom_navbar')
    if (bottomNavbar !== null) {
      bottomNavbar.style.setProperty('display', 'flex', 'important')
    }
    const headerNavbar: any = document.getElementById('header_nav')
    if (headerNavbar !== null) {
      headerNavbar.style.setProperty('display', 'flex', 'important')
    }

    this.showEditModal = false
    this.showAddModal = false
  }
}
</script>

<style scoped>
@keyframes glowing {
  0% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
  50% {
    background-color: #49e819;
    box-shadow: 0 0 20px #49e819;
  }
  100% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
}
.glowing {
  animation: glowing 1000ms;
  animation-iteration-count: 1;
}
.show_input {
  display: block;
}
</style>

<template>
  <div class="generator">
    <div class="generator__tabs">
      <div v-for="item in sideMenuItems" :key="item.menuId">
        <div
          v-if="item.available"
          :class="`${item.class} ${confMenu === item.menuId ? 'generator__tab--active' : ''}`"
          @click="changeConfMenu(item.menuId)"
        />
      </div>
    </div>

    <div class="generator__box">
      <div class="generator__wrapper">
        <CupChoice
          v-if="(confMenu === tab.cups) && showEdit"
        />
        <BackgroundChoice
          v-if="confMenu === tab.bgs && showEdit"
        />
        <ItemsChoice
          v-if="confMenu === tab.items && showEdit"
          :edit-mode="editMode"
          @switchAddModal="switchAddModal"
          @switchEditModal="switchEditModal"
        />
        <QuoteChoice
          v-if="confMenu === tab.quotes && showEdit"
        />
        <MobilePreview
          v-if="confMenu === tab.preview && showEdit"
        />

        <Summary
          v-if="!isMobile"
          :conf-menu="confMenu"
          :edit-mode="editMode"
          :cart-item-id="cartItemId"
          @prevEditor="prevEditor"
          @nextEditor="nextEditor"
        />
      </div>
      <div
        v-if="(showAddModal || showEditModal) && !isMobile"
        class="overflow"
      />
    </div>
    <Summary
      v-if="isMobile && !showAddModal && !editMode"
      :conf-menu="confMenu"
      :edit-mode="editMode"
      :cart-item-id="cartItemId"
      @prevEditor="prevEditor"
      @nextEditor="nextEditor"
    />
    <SmallMobileLoader v-if="loader" class="mobile" />
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Mutation, Vue, Getter, Watch } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import MobilePreview from './MobilePreview.vue'
import CupChoice from '~/components/Cup/CupChoice.vue'
import BackgroundChoice from '~/components/Cup/BackgroundChoice.vue'
import ItemsChoice from '~/components/Cup/ItemsChoice.vue'
import QuoteChoice from '~/components/Cup/QuoteChoice.vue'
import Summary from '~/components/Cup/Summary.vue'
import { Side } from '~/store/preview/state'
import { Tabs } from '~/store/cup/state'
import SmallLoader from '~/components/Common/SmallLoader.vue'
import SmallMobileLoader from '~/components/Common/SmallMobileLoader.vue'

type SideMenu = Record<number, {
  menuId: number,
  class : string,
  available: boolean
}>

@Component({
  components: {
    CupChoice, BackgroundChoice, ItemsChoice, QuoteChoice, Summary, SmallLoader, MobilePreview, SmallMobileLoader
  }
})
export default class EditArea extends Vue {
  @Prop(Boolean) readonly editMode!: boolean
  @Prop(Boolean) readonly loading!: boolean
  @Prop(String) readonly cartItemId!: string
  @Prop(Number) readonly menu!: Tabs

  @Getter('app/isMobile') isMobile!: boolean
  @Getter('cup/availableBackgrounds') availableBackgrounds!: string[]

  @Mutation('preview/setUnactivePreview') setUnactivePreview!: Function
  @Mutation('preview/setActivePreview') setActivePreview!: Function

  confMenu = Tabs.items
  showAddModal = false
  showEditModal = false
  loader = true
  tab = Tabs

  showEdit: boolean = true

  sideMenuItems: SideMenu = {
    [Tabs.cups]: {
      menuId: Tabs.cups,
      class: 'generator__tab generator__tab--1',
      available: true
    },
    [Tabs.bgs]: {
      menuId: Tabs.bgs,
      class: 'generator__tab generator__tab--2',
      available: true
    },
    [Tabs.items]: {
      menuId: Tabs.items,
      class: 'generator__tab generator__tab--3',
      available: true
    },
    [Tabs.quotes]: {
      menuId: Tabs.quotes,
      class: 'generator__tab generator__tab--4',
      available: true
    },
    [Tabs.preview]: {
      menuId: Tabs.preview,
      class: 'generator__tab generator__tab--5',
      available: true
    }
  }

  @Watch('menu')
  onMenuChange () {
    this.confMenu = this.menu
  }

  @Watch('availableBackgrounds')
  onAvailableBackgroundsChange () {
    this.sideMenuItems[Tabs.bgs].available = (this.availableBackgrounds || []).length > 0
  }

  @Watch('isMobile')
  onChangeMobile () {
    this.sideMenuItems[Tabs.preview].available = this.isMobile
    if (this.confMenu === Tabs.preview) {
      this.prevEditor()
    }
  }

  mounted () {
    this.loader = false
  }

  created () {
    this.confMenu = this.menu
    this.sideMenuItems[Tabs.preview].available = this.isMobile
  }

  switchAddModal (value: boolean) {
    this.showAddModal = value
  }

  switchEditModal (value: boolean) {
    this.showEditModal = value
  }

  getPrevMenu (menuId: Tabs): Tabs {
    const keys: string[] = Object.keys(this.sideMenuItems)
    const i = keys.indexOf(`${menuId}`)
    return i !== -1 && keys[i - 1] && this.sideMenuItems[+keys[i - 1]] ? +keys[i - 1] : Tabs.quotes
  }

  getNextMenu (menuId: Tabs): Tabs {
    const keys: string[] = Object.keys(this.sideMenuItems)
    const i = keys.indexOf(`${menuId}`)
    return i !== -1 && keys[i + 1] && this.sideMenuItems[+keys[i + 1]] ? +keys[i + 1] : Tabs.cups
  }

  prevEditor () {
    let id = this.getPrevMenu(this.confMenu)
    if (id === Tabs.bgs && !this.sideMenuItems[Tabs.bgs].available) {
      id = this.getPrevMenu(id)
    }
    this.confMenu = id
    if (id === Tabs.quotes && !this.isMobile) {
      this.setUnactivePreview(Side.Front)
      this.setActivePreview(Side.Back)
    } else {
      this.setUnactivePreview(Side.Back)
      this.setActivePreview(Side.Front)
    }
  }

  nextEditor () {
    let id = this.getNextMenu(this.confMenu)
    if (id === Tabs.bgs && !this.sideMenuItems[Tabs.bgs].available) {
      id = this.getNextMenu(id)
    }
    this.confMenu = id
    if (id === Tabs.quotes && !this.isMobile) {
      this.setUnactivePreview(Side.Front)
      this.setActivePreview(Side.Back)
    } else {
      this.setUnactivePreview(Side.Back)
      this.setActivePreview(Side.Front)
    }
  }

  changeConfMenu (id: Tabs) {
    const bottomNavbar = document.getElementById('bottom_navbar')
    if (bottomNavbar != null) {
      bottomNavbar.style.setProperty('display', 'flex', 'important')
    }

    if (id === Tabs.bgs && !this.sideMenuItems[Tabs.bgs].available) {
      id = this.getNextMenu(id)
    }
    this.confMenu = id
    if (id === Tabs.quotes && !this.isMobile) {
      this.setUnactivePreview(Side.Front)
      this.setActivePreview(Side.Back)
      this.setActiveButton('back')
    } else {
      this.setUnactivePreview(Side.Back)
      this.setActivePreview(Side.Front)
      this.setActiveButton('front')
    }
  }

  /**
   * @todo changing classes directly is invalid
   */
  setActiveButton (type) {
    const activeBack = document.getElementById('backPreview')?.classList
    const activeFront = document.getElementById('frontPreview')?.classList
    if (type === 'back') {
      activeBack?.remove('btn--transparent')
      activeBack?.add('btn--green')
      activeFront?.remove('btn--green')
      activeFront?.add('btn--transparent')
    } else {
      activeFront?.remove('btn--transparent')
      activeFront?.add('btn--green')
      activeBack?.remove('btn--green')
      activeBack?.add('btn--transparent')
    }
  }
}
</script>

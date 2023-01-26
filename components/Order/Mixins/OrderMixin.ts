import { Action, Component, Getter, Mutation, Vue, Watch } from 'nuxt-property-decorator'
import { validate } from 'vee-validate'
import { OrderContainer } from '~/store/order/state'

@Component
export default class OrderMixin extends Vue {

  @Getter('order/order') order!: OrderContainer
  @Getter('app/token') token!: string

  @Mutation('order/setAdditionalInfo') setAdditionalInfo!: Function
  @Mutation('order/setBilling') setBilling!: Function
  @Mutation('order/setDelivery') setDelivery!: Function
  @Mutation('order/setToken') setOrderToken!: Function

  @Action('order/updateOrder') updateOrder!: Function

  otherDeliveryAddress: boolean = false

  additionalInfo: string = ''
  alertShow: boolean = false;

  billing: any = {
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    isCompany: false,
    companyName: '',
    taxId: '',
    country: 'pl'
  }

  errorMessage: string = ''

  delivery: any = {
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    method: '',
    country: 'pl'
  }

  timer: any = null

  @Watch('order', { deep: true })
  onOrderChange() {
    if (JSON.stringify(this.billing) !== JSON.stringify(this.order?.billing || {})) {
      this.billing = { ...this.order.billing, country: 'pl' }
    }
    if (JSON.stringify(this.delivery) !== JSON.stringify(this.order?.delivery || {})) {
      this.delivery = { ...this.order.delivery, country: 'pl' }
    }
    if (this.order?.additionalInfo && this.additionalInfo !== this.order.additionalInfo) {
      this.additionalInfo = this.order.additionalInfo || ''
    }
  }


  mounted() {
    this.onOrderChange()
  }

  onChange() {
    // if (this.timer) {
    //   clearTimeout(this.timer)
    // }
    // this.timer = setTimeout(this.save, 3000)
  }

  setPrivateAddress() {
    this.billing.isCompany = false
  }

  clickErrorMessage(errors) {
    this.alertShow = false;
  }

  setBusinessAddress() {
    this.billing.isCompany = true
  }

  async checkValidity() {
    this.errorMessage = ''
    const isValid = await (this.$refs.observer as Vue & { validate: () => boolean }).validate()
    const object = (this.$refs.observer as Vue & { errors: any }).errors
    const arr = Object.keys(object)
    arr.map((item, index) => {
      if (object[item][0] != undefined)
        this.errorMessage += object[item][0] + '<br/>'

    })
    this.$notify({
      group: 'foo',
      title: 'Invalidate form',
      type: 'error',
      text: this.errorMessage
    })
    if (this.errorMessage.length > 0) {
    }
    this.alertShow = true
    if (!isValid) {
      return false
    }
    return true

  }

  async goToCheckout() {
    if (await this.checkValidity() != true)
      return

    if (this.timer) {
      clearTimeout(this.timer)
    }
    await this.save()

    if (this.billing.isCompany) {
      const companyFields = {
        name: 'imię i nazwisko odbiorcy',
        companyName: 'nazwę firmy',
        taxId: 'identyfikator podatkowy'
      }
      if (!this.checkField(companyFields, this.billing)) {
        return
      }
    }

    const billingFields = {
      name: 'swoje imię i nazwisko',
      email: 'swój adres e-mail',
      address: 'swój adres',
      city: 'miasto',
      zip: 'kod pocztowy',
      phone: 'swój numer telefonu'
    }
    if (!this.checkField(billingFields, this.billing)) {
      return
    }

    if (this.otherDeliveryAddress) {
      const deliveryFields = {
        name: 'imię i nazwisko w adresie dostawy',
        email: 'adres e-mail w adresie dostawy',
        address: 'adres dostawy',
        city: 'miasto dostawy',
        zip: 'kod pocztowy dostawy',
        phone: 'numer telefonu w adresie dostawy'
      }
      if (!this.checkField(deliveryFields, this.delivery)) {
        return
      }
    }

    await this.$router.push('/zamowienie/transport-i-platnosc')
  }

  checkField(fields: object, form: object): boolean {
    for (const [index, text] of Object.entries(fields)) {
      if (!form[index]) {
        this.$nuxt.$emit('showMessage', {
          title: 'Hmmm... chyba czegoś brakuje',
          message: `Uzupełnij proszę ${text}. Bez tego nie możemy wysłać przesyłki.`
        })
        return false
      }
    }
    return true
  }

  async save() {
    this.setAdditionalInfo(this.additionalInfo)
    this.setBilling(this.billing)
    this.setDelivery(this.delivery)
    this.setOrderToken(this.token)
    await this.updateOrder()
  }
}

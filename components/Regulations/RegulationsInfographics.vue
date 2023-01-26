<template>
  <div>
    <Breadcrumb title="Regulamin - infografika" />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="plainTextWithBullets">
              <article class="dks-infographic">
                <div class="dks-infographic--section grey-box ">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/account-cog.png"
                      alt="account icon"
                    >
                  </div>
                  <div class="company-info">
                    <h3 class="dks-infographic--h3">
                      Sprzedawca
                    </h3>
                    <h4>{{ companyName }}</h4>
                    <span>{{ companyStreet }}, {{ companyZip }} {{ companyCity }}</span>
                    NIP: 6272769769<br>
                    REGON: 38747918400000<br>
                    KRS: 0000868748<br>
                  </div>
                </div>
                <div class="dks-infographic--section grey-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/email-outline.png"
                      alt="email icon"
                    />
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Kontakt ze Sprzedawcą
                    </h3>
                    <div class="contact-info">
                      <div>
                        <h4>
                          <a :href="`mailto:${companyMail}`">
                            <i class="fa fa-envelope" aria-hidden="true" />
                          </a>
                        </h4>
                        <span>
                          {{ companyMail }}
                        </span>
                      </div>
                      <div>
                        <h4>
                          <a :href="`callto:${phone}`">
                            <i class="fa fa-phone" aria-hidden="true" />
                          </a>
                        </h4>
                        <span>
                          {{ phoneFormatted }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dks-infographic--section full-box">
                  <div />
                  <div>
                    <h3 class="dks-infographic--h3">
                      Sposoby płatności
                    </h3>
                    <div class="small-boxes-container">
                      <div>
                        <i class="fa fa-university" />
                        <h5>przelew bankowy</h5>
                      </div>
<!--                      {/*<div>-->
<!--                        */}-->
<!--                        {/*    <Picture path="{card}" alt="card payment">*/}-->
<!--                        {/*    <h5>karta płatnicza</h5>*/}-->
<!--                        {/*-->
<!--                      </div>*/}-->
                      <div d-flex justify-content-center align-items-center>
                        <img src="/images/regulations/Przelewy24_logo.svg" alt="payment online" />
                        <h5>platforma płatnicza</h5>
                      </div>
                      <div d-flex justify-content-center align-items-center>
                        <img src="/images/regulations/banknoty.png" alt="cash on delivery" />
                        <h5>za pobraniem</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dks-infographic--section full-box">
                  <div>
                    <h3 class="dks-infographic--h3">
                      Wyciąg z regulaminu
                    </h3>
                    <span>
                      Dla twojej wygody przygotowaliśmy wyciąg najważniejszych informacji z regulaminu.
                      Wskazane informacje zostały opisane w sposób uproszczony i jedynie oddają
                      intencje wyrażone w regulaminie, nie uwzględniając przy tym szczegółów, które w danej
                      sprawie mogą mieć charakter istotny.
                    </span>
                  </div>
                </div>
                <div class="dks-infographic--section grey-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/account-key.png"
                      alt="account key icon"
                    />
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Dane Użytkowników
                    </h3>
                    Administratorem danych Użytkowników jest Sprzedawca. Szczegóły
                    dotyczące przetwarzania danych osobowych znajdują się w polityce
                    prywatności Sklepu.
                  </div>
                </div>
                <div class="dks-infographic--section grey-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/account-box.png"
                      alt="account box icon"
                    />
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Konto Użytkownika
                    </h3>
                    W chwili obecnej w sklepie nie można założyć konta, które umożliwia Użytkownikowi dostęp do dodatkowych funkcji.
                  </div>
                </div>
                <div class="dks-infographic--section white-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/timetable.png"
                      alt="timetable icon"
                    />
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Termin realizacji zamówienia
                    </h3>
                    Czas realizacji zamówienia wynosi 2 dni robocze.
                  </div>
                </div>
                <div class="dks-infographic--section white-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/timer.png"
                      alt="timer icon"
                    />
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Termin płatności
                    </h3>
                    W przypadku wyboru płatności z góry, Konsument ma 7 dni roboczych na
                    jej dokonanie.
                  </div>
                </div>
                <div class="dks-infographic--section grey-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/close-circle-outline.png"
                      alt="close circle icon"
                    />
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Odstąpienie od umowy
                    </h3>
                    Co do zasady, Konsument ma prawo odstąpić od umowy w ciągu 14 dni od
                    otrzymania towaru.
                  </div>
                </div>
                <div class="dks-infographic--section grey-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/alert-circle-outline.png"
                      alt="warning icon"
                    />
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Ograniczone prawo do odstąpienia od umowy
                    </h3>
                    W przypadku zamówienia spersonalizowanego produktu Konsumentowi
                    nie przysługuje prawo do odstąpienia od umowy.
                  </div>
                </div>
                <div class="dks-infographic--section white-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/file-export.png"
                      alt="complaint icon"
                    >
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Rozpatrzenie reklamacji
                    </h3>
                    W ciągu 14 dni od daty otrzymania zgłoszenia przez Sprzedawcę.
                  </div>
                </div>
                <div class="dks-infographic--section white-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/settings.png"
                      alt="complaint options icon"
                    >
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Opcje reklamacyjne dla Konsumenta
                    </h3>
                    <ul class="dks-infographic--ul">
                      <li>oświadczenie o obniżeniu ceny,</li>
                      <li>odstąpienie od umowy (tylko przy wadzie istotnej),</li>
                      <li>żadanie wymiany towaru na nowy,</li>
                      <li>żadanie usunięcia wady.</li>
                    </ul>
                  </div>
                </div>
                <div class="dks-infographic--section grey-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/truck-delivery.png"
                      alt="delivery methods icon"
                    >
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Metody dostawy
                    </h3>
                    <ul class="dks-infographic--ul">
                      <li>za pośrednictwem firmy kurierskiej InPost</li>
                      <li>do paczkomatów InPost</li>
                    </ul>
                  </div>
                </div>
                <div class="dks-infographic--section grey-box">
                  <div class="d-flex justify-content-center align-items-center">
                    <img
                      class="dks-infographic--icon"
                      src="https://cdn.legalgeek.tech/document-library/icons/png/128/flag.png"
                      alt="flag icon"
                    >
                  </div>
                  <div>
                    <h3 class="dks-infographic--h3">
                      Reklamacje
                    </h3>
                    W przypadku gdy towar okaże się wadliwy, Konsument może reklamować
                    zakup w oparciu o rękojmię.
                  </div>
                </div>
              </article>

              <br>
              <br>
              <h3 class="styled-page-header">
                Pełne wersje regulaminów
              </h3>
              <div class="regulations-boxes">
                <div>
                  <NuxtLink rel="nofollow" to="/regulamin">
                    <h4>Pełny<br>regulamin</h4>
                  </NuxtLink>
                </div>
                <div>
                  <NuxtLink rel="nofollow" to="/regulamin-newslettera">
                    <h4>Regulamin<br>newslettera</h4>
                  </NuxtLink>
                </div>
                <div>
                  <NuxtLink rel="nofollow" to="/regulamin-kont">
                    <h4>Regulamin<br>kont</h4>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import Picture from '~/components/Common/Picture.vue'

@Component({
  components: { Breadcrumb, Picture }
})
export default class RegulationsInfographics extends Vue {
  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyName: string = <string>process.env.companyName
  companyStreet: string = <string>process.env.companyStreet
  companyZip: string = <string>process.env.companyZip
  companyCity: string = <string>process.env.companyCity
  companyMail: string = <string>process.env.companyMail
}
</script>


<style>
    .font-text {
      color: #858585;
      font-family: ""Poppins", sans-serif";
    }
</style>

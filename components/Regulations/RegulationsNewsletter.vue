<template>
  <div>
    <Breadcrumb title="Regulamin newslettera"/>
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">

            <div class="plainTextWithBullets">
              <h3 class="document-heading center">Regulamin newslettera sklepu KapKap.eu</h3>
              <section class="menu">
                <h4>SPIS TREŚCI</h4>
                <ItemsList :items="items" />
              </section>
              <section id="definitions">
                <h4>§ 1 DEFINICJE</h4>

                <span><b>Konsument</b> – konsument w rozumieniu przepisów Kodeksu cywilnego.</span>
                <span><b>Newsletter</b> – nieodpłatnie świadczona drogą elektroniczną usługa, dzięki której Usługobiorca
                może
                otrzymywać od Usługodawcy drogą elektroniczną uprzednio zamówione wiadomości dotyczące Sklepu, w tym
                informacje o ofertach, promocjach oraz nowościach w Sklepie.
                </span>
                <span><b>Sklep</b> – sklep internetowy KapKap.eu prowadzony przez Usługodawcę pod adresem
                https://kapkap.eu</span>
                <span><b>Usługodawca</b> - {{ companyName }} z siedzibą pod adresem
                {{ companyStreet }}, {{ companyZip }} {{ companyCity }}
                wpisana do Krajowego Rejestru Sądowego - rejestru przedsiębiorców przez
                Sąd Rejonowy Katowice Wschód w Katowicach Wydział VIII Gospodarczy,
                pod nr KRS 0000868748,

                NIP 6272769769,
                nr REGON 38747918400000,
                kapitał zakładowy
                5000,00 zł.
                </span>
                <span><b>Usługobiorca</b> - każdy podmiot korzystający z usługi Newsletter.</span>
              </section>

              <section id="newsletter">
                <h4>§ 2 Newsletter</h4>

                <ol>
                  <li>
                    Usługobiorca może dobrowolnie skorzystać z usługi Newsletter.
                  </li>
                  <li>
                    Dla skorzystania z usługi Newsletter niezbędne jest urządzenie z przeglądarką
                    internetową w najnowszej wersji,
                    obsługującą JavaScript oraz pliki cookies, z dostępem do sieci Internet oraz aktywne
                    konto e-mail.
                  </li>
                  <li>
                    Wiadomości e-mail wysyłane w ramach tej usługi wysyłane będą na adres e-mail podany
                    przez Usługobiorcę w
                    momencie zapisywania się do Newslettera.
                  </li>
                  <li>
                    Usługobiorca, w celu zawarcia umowy i zapisania się do usługi Newsletter, w pierwszym
                    kroku podaje w
                    przeznaczonym do tego miejscu w Sklepie swój adres e-mail, na który chce otrzymywać
                    wiadomości przesyłane w
                    ramach Newslettera. W momencie zapisu na Newsletter zostaje zawarta umowa o świadczenie
                    usługi, a Usługodawca
                    rozpocznie jej świadczenie na rzecz Usługobiorcy – z zastrzeżeniem ust. 5.
                  </li>
                  <li>
                    W celu właściwej realizacji usługi Newslettera, Usługobiorca jest obowiązany podać swój
                    prawidłowy adres e-mail.

                  </li>
                  <li>
                    W wiadomościach wysyłanych w ramach Newslettera będzie znajdować się informacja o
                    możliwości wypisania się z
                    niego, a także link do wypisania się.
                  </li>
                  <li>
                    Usługobiorca może wypisać się z Newslettera, bez podawania przyczyny i ponoszenia
                    jakichkolwiek kosztów, w
                    każdym momencie, korzystając z opcji, o
                    której mowa w ust. 6 lub wysyłając wiadomość na adres e-mail Usługodawcy:
                    <a :href="`mailto:${companyMail}`">{{ companyMail }}</a>.
                  </li>
                  <li>
                    Skorzystanie przez Usługobiorcę z linka do
                    wypisania się z Newslettera lub wysłanie wiadomości z żądaniem wypisania z
                    Newslettera będzie skutkować niezwłocznym rozwiązaniem umowy w zakresie świadczenia tej
                    usługi.
                  </li>
                </ol>
              </section>

              <section id="complaints">
                <h4>§ 3 Reklamacje</h4>

                <ol>
                  <li>
                    Zgłoszenia reklamacyjne dotyczące Newslettera należy zgłaszać Usługodawcy na adres
                    e-mail:
                    <a :href="`mailto:${companyMail}`">{{ companyMail }}</a>.
                  </li>
                  <li>
                    Usługodawca ustosunkuje się do reklamacji w terminie 14 dni od otrzymania zgłoszenia
                    reklamacyjnego.
                    <br/><br/>
                    <b>POZASĄDOWE SPOSOBY ROZPATRYWANIA REKLAMACJI I DOCHODZENIA ROSZCZEŃ</b>
                  </li>
                  <li>
                    W przypadku gdy postępowanie reklamacyjne nie przyniesie rezultatu oczekiwanego przez
                    Usługobiorcę będącego Konsumentem, Konsument może skorzystać m.in. z:
                  </li>
                  <ol class="a">
                    <li>
                      mediacji prowadzonej przez właściwy terenowo Wojewódzki Inspektorat Inspekcji
                      Handlowej, do którego należy się zwrócić z wnioskiem o mediację. Co do zasady
                      postępowanie jest bezpłatne. Wykaz Inspektoratów znajduje się tutaj:
                      https://www.uokik.gov.pl/wazne_adresy.php#faq595;
                    </li>
                    <li>
                      pomocy właściwego terenowo stałego polubownego sądu konsumenckiego działającego
                      przy Wojewódzkim Inspektoracie Inspekcji Handlowej, do którego należy złożyć
                      wniosek o rozpatrzenie sprawy przed sądem polubownym. Co do zasady postępowanie
                      jest bezpłatne. Wykaz sądów dostępny jest pod adresem:
                      https://www.uokik.gov.pl/wazne_adresy.php#faq596;
                    </li>
                    <li>
                      bezpłatnej pomocy miejskiego lub powiatowego rzecznika Konsumentów;
                    </li>
                    <li>
                      internetowej platformy ODR dostępnej pod adresem:
                      https://ec.europa.eu/consumers/odr/main/?event=main.home.howitworks.
                    </li>
                  </ol>
                </ol>
              </section>

              <section id="personal-data">
                <h4>§ 4 Dane osobowe</h4>

                <ol>
                  <li>
                    Administratorem danych osobowych przekazanych przez Usługobiorcę w związku z zapisem na
                    Newsletter jest Usługodawca. Szczegółowe informacje dotyczące przetwarzania danych
                    osobowych przez Usługodawcę – w tym o pozostałych celach oraz podstawach przetwarzania
                    danych, a także o odbiorcach danych, znajdują się w dostępnej w Sklepie Polityce
                    prywatności – ze względu na zasadę przejrzystości, zawartą w ogólnym rozporządzeniu
                    Parlamentu Europejskiego i Rady (UE) o ochronie danych – „<strong>RODO</strong>”.
                  </li>
                  <li>
                    Celem przetwarzania danych Usługobiorcy jest wysyłka Newslettera. Podstawą przetwarzania
                    danych osobowych w tym przypadku jest umowa o świadczenie usługi lub działania
                    podejmowane na żądanie Usługobiorcy, zmierzające do jej zawarcia (art. 6 ust. 1 lit. b
                    RODO), a także prawnie uzasadniony interes Usługodawcy, polegający na przetwarzaniu
                    danych w celu ustalenia, dochodzenia lub obrony ewentualnych roszczeń (art. 6 ust. 1
                    lit. f RODO).
                  </li>
                  <li>
                    Podanie danych przez Usługobiorcę jest dobrowolne, ale jednocześnie konieczne do
                    świadczenia usługi Newslettera. Niepodanie danych oznacza, że Usługodawca nie będzie
                    mógł świadczyć tej usługi.
                  </li>
                  <li>Dane Usługobiorcy będą przetwarzane do momentu, w którym:</li>
                  <ol class="a">
                    <li>
                      Usługobiorca wypisze się z Newslettera;
                    </li>
                    <li>
                      ustanie możliwość dochodzenia roszczeń przez Usługobiorcę lub Usługodawcę,
                      związanych z Newsletterem;
                    </li>
                    <li>
                      zostanie przyjęty sprzeciw Usługobiorcy wobec przetwarzania jego danych
                      osobowych – w przypadku gdy podstawą przetwarzania danych był uzasadniony
                      interes Usługodawcy
                    </li>
                  </ol>
                  – w zależności od tego, co ma zastosowanie w danym przypadku i co nastąpi najpóźniej.
                  <li>
                    Usługobiorcy przysługuje prawo żądania:
                    <ol class="a">
                      <li>dostępu do swoich danych osobowych,</li>
                      <li>ich sprostowania,</li>
                      <li>usunięcia,</li>
                      <li>ograniczenia przetwarzania,</li>
                      <li>
                        przeniesienia danych do innego administratora
                        <br/>
                        a także prawo:
                      </li>
                      <li>
                        wniesienia w dowolnym momencie sprzeciwu wobec przetwarzania danych z przyczyn
                        związanych ze szczególną sytuacją Usługobiorcy – wobec przetwarzania dotyczących
                        go danych osobowych, opartego na art. 6 ust. 1 lit. f RODO (tj. na prawnie
                        uzasadnionych interesach realizowanych przez administratora).
                      </li>
                    </ol>
                  </li>
                  <li>
                    W celu realizacji swoich praw, Usługobiorca powinien skontaktować się z Usługodawcą.
                  </li>
                  <li>
                    W przypadku gdy Usługobiorca uzna, że jego dane są przetwarzane niezgodnie z prawem,
                    Usługobiorca może złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.
                  </li>
                </ol>
              </section>

              <section id="final-agreements">
                <h4>§ 5 Postanowienia końcowe</h4>

                <ol>
                  <li>
                    Usługodawca zastrzega sobie prawo do zmiany niniejszego regulaminu tylko z ważnych
                    przyczyn. Jako ważną
                    przyczynę rozumie się konieczność zmiany regulaminu spowodowaną modernizacją usługi
                    Newsletter lub zmianą
                    przepisów prawa, mającą wpływ na świadczenie usługi przez Usługodawcę.
                  </li>
                  <li>
                    Informacja o planowanej zmianie regulaminu zostanie wysłana na adres e-mail Usługobiorcy
                    podany w momencie
                    zapisywania się do Newslettera co najmniej na 7 dni przed wprowadzeniem zmian w życie.
                  </li>
                  <li>
                    W przypadku gdy Usługobiorca nie sprzeciwi się planowanym zmianom do chwili wejścia ich
                    w życie, przyjmuje się,
                    że akceptuje je.
                  </li>
                  <li>
                    W przypadku braku akceptacji dla planowanych zmian, Usługobiorca powinien wysłać
                    informację o tym na adres
                    e-mail Usługodawcy:
                    <a :href="`mailto:${companyMail}`">{{ companyMail }}</a>, co będzie
                    skutkować rozwiązaniem umowy o świadczenie usługi z chwilą wejścia w życie planowanych
                    zmian.
                  </li>
                  <li>
                    Zakazane jest dostarczanie przez Usługobiorcę treści o charakterze bezprawnym.
                  </li>
                  <li>
                    Umowa o świadczenie usługi Newslettera zawierana jest w języku polskim.
                  </li>
                  <li>
                    W przypadku Usługobiorcy niebędącego Konsumentem sądem właściwym będzie sąd właściwy dla
                    siedziby Usługodawcy.
                  </li>
                </ol>
              </section>
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
import RegulationsContactSection from '~/components/Regulations/RegulationsContactSection.vue'
import ItemsList from '~/components/Regulations/ItemsList.vue'

type Item = {
  title: string,
  id: string
}

@Component({
  components: { ItemsList, RegulationsContactSection, Breadcrumb }
})
export default class RegulationsInfographics extends Vue {
  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyName: string = <string>process.env.companyName
  companyStreet: string = <string>process.env.companyStreet
  companyZip: string = <string>process.env.companyZip
  companyCity: string = <string>process.env.companyCity
  companyMail: string = <string>process.env.companyMail

  items: Item[] = [
    {
      title: 'Definicje',
      id: 'definitions',
    },
    {
      title: 'Newsletter',
      id: 'newsletter',
    },
    {
      title: 'Reklamacje',
      id: 'complaints',
    },
    {
      title: 'Dane osobowe',
      id: 'personal-data',
    },
    {
      title: 'Postanowienia końcowe',
      id: 'final-agreements',
    },
  ]
}
</script>

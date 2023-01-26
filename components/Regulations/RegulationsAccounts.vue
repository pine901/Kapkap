<template>
  <div>
    <Breadcrumb title="Regulamin kont"/>
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">

            <div class="plainTextWithBullets">
              <h3 class="document-heading center">Regulamin konta w sklepie KapKap.eu</h3>
              <section class="menu">
                <h4>SPIS TREŚCI</h4>
                <ItemsList :items="items" />
              </section>
              <section id="definitions">
                <h4>§ 1 DEFINICJE</h4>

                <span><b>Konsument</b> – konsument w rozumieniu przepisów Kodeksu cywilnego.</span>
                <span><b>Konto</b> – uregulowana w niniejszym regulaminie nieodpłatna funkcja Sklepu (usługa), dzięki
                której Kupujący może założyć w Sklepie swoje indywidualne konto.</span>
                <span><b>Kupujący</b> - każdy podmiot kupujący w Sklepie.</span>


                <span><b>Sklep</b> – sklep internetowy KapKap.eu prowadzony przez Sprzedawcę pod adresem
                https://kapkap.eu</span>
                <span><b>Sprzedawca</b> -
                {{ companyName }} z siedzibą pod adresem
                {{ companyStreet }}, {{ companyZip }} {{ companyCity }}
                wpisana do Krajowego Rejestru Sądowego - rejestru przedsiębiorców przez
                Sąd Rejonowy Katowice Wschód w Katowicach Wydział VIII Gospodarczy,
                pod nr KRS 0000868748,

                NIP 6272769769,
                nr REGON 38747918400000,
                kapitał zakładowy
                5000,00 zł.
                </span>
              </section>
              <RegulationsContactSection />
              <section id="tech-requirements">
                <h4>§ 3 WYMOGI TECHNICZNE</h4>

                <ol>
                  <li>Dla prawidłowego funkcjonowania i założenia Konta potrzebne jest:</li>
                  <ul>
                    <li>aktywne konto e-mail</li>
                    <li>urządzenie z dostępem do Internetu</li>
                    <li>przeglądarka internetowa obsługująca JavaScript i pliki cookies</li>
                  </ul>
                </ol>
              </section>

              <section id="account">
                <h4>§ 4 KONTO</h4>

                <ol>
                  <li>
                    Założenie Konta jest całkowicie dobrowolne i zależne od woli
                    Kupującego.
                  </li>
                  <li>Konto daje Kupującemu dodatkowe możliwości, takie jak: przeglądanie historii zamówień
                    złożonych przez Kupującego
                    w Sklepie, sprawdzenie statusu zamówienia czy samodzielna edycja danych Kupującego.
                  </li>
                  <li>W celu założenia Konta należy wypełnić stosowny formularz w Sklepie.</li>
                  <li>W momencie założenia Konta zawierana jest na czas nieokreślony pomiędzy Kupującym a
                    Sprzedawcą umowa w zakresie
                    prowadzenia Konta na zasadach wskazanych w niniejszym regulaminie.
                  </li>
                  <li>Kupujący może bez ponoszenia jakichkolwiek kosztów w każdym czasie zrezygnować z
                    Konta.
                  </li>
                  <li>W celu dokonania rezygnacji z Konta należy wysłać swoją rezygnację do Sprzedawcy na
                    adres
                    e-mail: {{ companyMail }}, czego skutkiem będzie niezwłoczne usunięcie Konta oraz
                    rozwiązanie umowy w zakresie prowadzenia Konta.
                  </li>
                </ol>
              </section>

              <section id="complaints">
                <h4>§ 5 REKLAMACJE</h4>

                <ol>
                  <li>
                    Reklamacje dotyczące funkcjonowania Konta należy kierować na adres e-mail
                    {{ companyMail }}.
                  </li>
                  <li>
                    Rozpatrzenie reklamacji przez Sprzedawcę nastąpi w terminie do 14 dni.
                    <br/><br/>
                    <b>POZASĄDOWE SPOSOBY ROZPATRYWANIA REKLAMACJI I DOCHODZENIA ROSZCZEŃ</b>
                  </li>
                  <li>
                    W przypadku gdy postępowanie reklamacyjne nie przyniesie oczekiwanego przez Konsumenta
                    rezultatu Konsument może
                    skorzystać m.in. z:
                  </li>
                  <ol class="a">
                    <li>mediacji prowadzonej przez właściwy terenowo Wojewódzki Inspektorat Inspekcji
                      Handlowej, do którego
                      należy się zwrócić z wnioskiem o mediację. Co do zasady postępowanie jest
                      bezpłatne. Wykaz Inspektoratów
                      znajduje się tutaj: https://www.uokik.gov.pl/wazne_adresy.php#faq595;
                    </li>
                    <li>pomocy właściwego terenowo stałego polubownego sądu konsumenckiego działającego
                      przy Wojewódzkim
                      Inspektoracie Inspekcji Handlowej, do którego należy złożyć wniosek o
                      rozpatrzenie sprawy przed sądem
                      polubownym. Co do zasady postępowanie jest bezpłatne. Wykaz sądów dostępny jest
                      pod adresem:
                      https://www.uokik.gov.pl/wazne_adresy.php#faq596;
                    </li>
                    <li>bezpłatnej pomocy miejskiego lub powiatowego rzecznika Konsumentów;</li>
                    <li>internetowej platformy ODR dostępnej pod adresem:
                      https://ec.europa.eu/consumers/odr/main/?event=main.home.howitworks.
                    </li>
                  </ol>
                </ol>
              </section>

              <section id="personal-data">
                <h4>§ 6 DANE OSOBOWE</h4>

                <ol>
                  <li>
                    Administratorem danych osobowych przekazanych przez Kupującego podczas korzystania z
                    Konta jest Sprzedawca.
                    Szczegółowe informacje dotyczące przetwarzania danych osobowych przez Sprzedawcę – w tym
                    o pozostałych celach
                    oraz podstawach przetwarzania danych, a także o odbiorcach danych, znajdują się w
                    dostępnej w Sklepie Polityce
                    prywatności – ze względu na zasadę przejrzystości, zawartą w ogólnym rozporządzeniu
                    Parlamentu Europejskiego i
                    Rady (UE) o ochronie danych – „<strong>RODO</strong>”.
                  </li>
                  <li>
                    Celem przetwarzania danych Kupującego jest prowadzenie Konta. Podstawą przetwarzania
                    danych osobowych w tym
                    przypadku jest umowa o świadczenie usługi lub działania podejmowane na żądanie
                    Kupującego, zmierzające do jej
                    zawarcia (art. 6 ust. 1 lit. b RODO), a także prawnie uzasadniony interes Sprzedawcy,
                    polegający na
                    przetwarzaniu danych w celu ustalenia, dochodzenia lub obrony ewentualnych roszczeń
                    (art. 6 ust. 1 lit. f RODO).
                  </li>
                  <li>
                    Podanie danych przez Kupującego jest dobrowolne, ale jednocześnie konieczne do
                    prowadzenia Konta. Niepodanie
                    danych oznacza, że Sprzedawca nie będzie mógł świadczyć usługi prowadzenia Konta.
                  </li>
                  <li>Dane Kupującego będą przetwarzane do momentu, w którym:</li>
                  <ol class="a">
                    <li>
                      Konto zostanie usunięte przez Kupującego lub Sprzedawcę na żądanie Kupującego
                    </li>
                    <li>
                      ustanie możliwość dochodzenia roszczeń przez Kupującego lub Sprzedawcę,
                      związanych z Kontem;
                    </li>
                    <li>
                      zostanie przyjęty sprzeciw Kupującego wobec przetwarzania jego danych osobowych
                      – w przypadku gdy
                      podstawą przetwarzania danych był uzasadniony interes Sprzedawcy
                    </li>
                  </ol>
                  – w zależności od tego, co ma zastosowanie w danym przypadku i co nastąpi najpóźniej.
                  <li>Kupującemu przysługuje prawo żądania:</li>
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
                      związanych ze szczególną
                      sytuacją Kupującego – wobec przetwarzania dotyczących go danych osobowych,
                      opartego na art. 6 ust. 1
                      lit. f RODO (tj. na prawnie uzasadnionych interesach realizowanych przez
                      administratora).
                    </li>
                  </ol>
                  <li>
                    W celu realizacji swoich praw, Kupujący powinien skontaktować się ze Sprzedawcą.
                  </li>
                  <li>
                    W przypadku gdy Kupujący uzna, że jego dane są przetwarzane niezgodnie z prawem,
                    Kupujący może złożyć skargę do
                    Prezesa Urzędu Ochrony Danych Osobowych.
                  </li>
                </ol>
              </section>

              <section id="stricture">
                <h4>§ 7 ZASTRZEŻENIA</h4>

                <ol>
                  <li>Zakazane jest dostarczanie przez Kupującego treści o charakterze bezprawnym.</li>
                  <li>Umowa w zakresie prowadzenia Konta zawierana jest w języku polskim.</li>
                  <li>W przypadku zaistnienia ważnych przyczyn, o których mowa w ust. 4, Sprzedawca ma prawo
                    do zmiany niniejszego
                    regulaminu Konta.
                  </li>
                  <li>Ważnymi przyczynami, o których mowa w ust. 3 są:</li>
                  <ol class="a">
                    <li>konieczność dostosowania Sklepu do przepisów prawa mających zastosowanie do
                      działalności Sklepu
                    </li>
                    <li>poprawa bezpieczeństwa świadczonej usługi</li>
                    <li>zmiana funkcjonalności Konta wymagająca modyfikacji regulaminu Konta.</li>
                  </ol>
                  <li>Kupujący zostanie poinformowany o planowanej zmianie regulaminu Konta co najmniej na 7
                    dni przed wprowadzeniem
                    zmiany w życie za pośrednictwem wiadomości e-mail wysłanej na przypisany do Konta adres.
                  </li>
                  <li>W przypadku gdy Kupujący nie wyrazi akceptacji dla planowanej zmiany, powinien
                    poinformować o tym Sprzedawcę
                    poprzez wysłanie odpowiedniej wiadomości na adres e-mail Sprzedawcy {{ companyMail }},
                    czego
                    skutkiem będzie rozwiązanie umowy w zakresie prowadzenia Konta z chwilą wejścia w życie
                    planowanej zmiany lub
                    wcześniej, jeśli Kupujący zgłosi takie żądanie.
                  </li>
                  <li>W sytuacji gdy Kupujący nie wyrazi sprzeciwu dla planowanej zmiany do chwili wejścia jej
                    w życie przyjmuje się,
                    że akceptuje ją, co nie stanowi żadnej przeszkody do rozwiązania umowy w przyszłości.
                  </li>
                  <li>W przypadku ewentualnego sporu z Kupującym nie będącym Konsumentem sądem właściwym
                    będzie sąd właściwy dla
                    siedziby Sprzedawcy.
                  </li>
                  <li>Żadne z postanowień niniejszego regulaminu nie wyłącza lub w żadnym stopniu nie
                    ogranicza uprawnień Konsumenta
                    wynikających z przepisów prawa.
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
      title: 'Kontakt ze Sprzedawcą',
      id: 'contact',
    },
    {
      title: 'Wymogi techniczne',
      id: 'tech-requirements',
    },
    {
      title: 'Konto',
      id: 'account',
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
      title: 'Zastrzeżenia',
      id: 'stricture',
    },
  ]
}
</script>

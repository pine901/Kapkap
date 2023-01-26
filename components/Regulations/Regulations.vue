<template>
  <section class="policy">
    <div class="container">
      <h1 class="title title--green">Regulamin</h1>

      <section style="margin-top: 30px;margin-left:15px;">
        <div>
          <div class="row">
            <div>
              <div class="plainTextWithBullets" style="padding: 0 0 !important;">
                <h3 document-name="regulations" class="document-heading">
                  Regulamin sklepu internetowego KapKap.eu
                </h3>
                <section>
                  określający m.in. zasady zawierania umów sprzedaży poprzez Sklep, zawierający najważniejsze
                  informacje o Sprzedawcy,
                  Sklepie oraz o prawach Konsumenta
                </section>
                <section class="menu">
                  <h4>SPIS TREŚCI</h4>
                  <ItemsList :items="items" />
                  <div class="attachment-link" @click="gotoSection('attachment')">
                    <b>Załącznik nr 1:</b> Wzór formularza odstąpienia od umowy
                  </div>
                </section>
                <section id="definitions">
                  <h4>§ 1 DEFINICJE</h4>

                  <span><b>Dni robocze</b> – dni od poniedziałku do piątku za wyjątkiem dni ustawowo wolnych od pracy.</span>
                  <span><b>Konto</b> – uregulowana odrębnym regulaminem nieodpłatna funkcja Sklepu (usługa świadczona drogą
                elektroniczną), dzięki której Kupujący może założyć w Sklepie swoje indywidualne konto.</span>
                  <span><b>Konsument</b> – konsument w rozumieniu przepisów Kodeksu cywilnego.</span>
                  <span><b>Kupujący</b> – każdy podmiot kupujący w Sklepie.</span>
                  <span><b>Regulamin</b> – niniejszy regulamin.</span>
                  <span>
                  <b>Sklep</b> – sklep internetowy KapKap.eu prowadzony przez Sprzedawcę pod adresem https://kapkap.eu.
                </span>
                  <span>
                  <b>Sprzedawca</b> –
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
                    <li>Dla prawidłowego funkcjonowania Sklepu potrzebne jest:
                      <ul>
                        <li>urządzenie z dostępem do Internetu</li>
                        <li>przeglądarka internetowa obsługująca JavaScript oraz pliki cookies.</li>
                      </ul>
                    </li>
                    <li>Dla złożenia zamówienia w Sklepie, poza wymogami określonymi w ust. 1, niezbędne jest
                      aktywne konto e-mail.
                    </li>
                  </ol>
                </section>
                <section id="shop">
                  <h4>§ 4 ZAKUPY W SKLEPIE</h4>

                  <ol>
                    <li>Ceny towarów widoczne w Sklepie są całkowitymi cenami za towar.</li>
                    <li>Sprzedawca zwraca uwagę, że na całkowitą cenę zamówienia składają się wskazane w
                      Sklepie: cena za towar oraz,
                      jeśli w danym przypadku ma to zastosowanie, koszty dostawy towaru.
                    </li>
                    <li>Wybrany do kupienia towar należy dodać do koszyka w Sklepie.</li>
                    <li>Następnie Kupujący wybiera z dostępnych w Sklepie: sposób dostawy towaru oraz metodę
                      płatności za zamówienie, a
                      także podaje dane niezbędne do zrealizowania złożonego zamówienia.
                    </li>
                    <li>Zamówienie zostaje złożone w momencie potwierdzenia jego treści i zaakceptowania
                      Regulaminu przez Kupującego.
                    </li>
                    <li>Złożenie zamówienia jest tożsame z zawarciem umowy sprzedaży pomiędzy Kupującym a
                      Sprzedawcą.
                    </li>
                    <li>Sprzedawca przekaże Konsumentowi potwierdzenie zawarcia umowy sprzedaży na trwałym
                      nośniku najpóźniej w momencie
                      dostarczenia towaru.
                    </li>
                    <li>
                      Kupujący może zarejestrować się w Sklepie, tj. założyć w nim Konto, lub dokonywać
                      zakupów bez rejestracji poprzez podawanie swoich danych przy każdym ewentualnym
                      zamówieniu.
                    </li>
                  </ol>
                </section>

                <section id="payments">
                  <h4>§ 5 PŁATNOŚCI</h4>
                  <ol>
                    <li>Za złożone zamówienie można zapłacić, w zależności od wyboru Kupującego:
                      <ol class="a">
                        <li>zwykłym przelewem na rachunek bankowy Sprzedawcy;</li>
                        <li>za pomocą karty płatniczej:
                          <ul>
                            <li>
                              Visa
                            </li>
                            <li>
                              Visa Electron
                            </li>
                            <li>
                              MasterCard
                            </li>
                            <li>
                              MasterCard Electronic
                            </li>
                            <li>
                              Maestro
                            </li>
                          </ul>
                        </li>
                        <li>za pośrednictwem platformy płatniczej:
                          <ul>
                            <li>PayU</li>
                          </ul>
                        </li>
                        <li>
                          za pobraniem, tj.
                          kartą lub gotówką
                          w momencie dostarczenia towaru do Kupującego;
                        </li>
                      </ol>
                    </li>
                    <li>W przypadku wybrania przez Kupującego płatności z góry, za zamówienie należy zapłacić w
                      terminie 7 Dni roboczych od złożenia zamówienia.
                    </li>
                    <li>Sprzedawca informuje, że w przypadku niektórych metod płatności, ze względu na ich
                      specyfikę, opłacenie
                      zamówienia tą metodą jest możliwe wyłącznie bezpośrednio po złożeniu zamówienia.
                    </li>
                  </ol>
                </section>

                <section id="orders">
                  <h4>§ 6 REALIZACJA ZAMÓWIENIA</h4>

                  <ol>
                    <li>Sprzedawca jest obowiązany do dostarczenia towaru bez wad.</li>
                    <li>
                      Termin realizacji zamówienia wynosi 2 Dni robocze.
                    </li>
                    <li>W przypadku, gdy Kupujący wybrał płatność z góry za zamówienie, Sprzedawca przystąpi do
                      realizacji zamówienia po
                      jego opłaceniu.
                    </li>
                    <li>
                      Towar dostarczany jest wyłącznie na terytorium Rzeczypospolitej Polskiej.
                    </li>
                    <li>
                      Towary zakupione w Sklepie dostarczane są w zależności od tego jaką metodę dostawy
                      wybrał Kupujący:
                      <ol class="a">
                        <li>Za pośrednictwem firmy kurierskiej</li>
                        <li>Za pośrednictwem Poczty Polskiej</li>
                        <li>Za pośrednictwem Paczki w RUCHu</li>
                        <li>Do paczkomatów InPost</li>
                      </ol>
                    </li>
                  </ol>
                </section>

                <section id="contract-rights">
                  <h4>§ 7 PRAWO ODSTĄPIENIA OD UMOWY</h4>

                  <ol>
                    <li>Konsument ma prawo odstąpić od umowy zawartej ze Sprzedawcą za pośrednictwem Sklepu, z
                      zastrzeżeniem § 8
                      Regulaminu, w terminie 14 dni bez podania jakiejkolwiek przyczyny.
                    </li>
                    <li>
                      Termin do odstąpienia od umowy wygasa po upływie 14 dni od dnia:
                      <ol class="a">
                        <li>w którym Konsument wszedł w posiadanie towaru lub w którym osoba trzecia inna
                          niż przewoźnik i wskazana
                          przez Konsumenta weszła w posiadanie tego towaru;
                        </li>
                        <li>w którym Konsument wszedł w posiadanie ostatniej z rzeczy lub w którym osoba
                          trzecia, inna niż
                          przewoźnik i wskazana przez Konsumenta, weszła w posiadanie ostatniej z rzeczy w
                          przypadku umowy
                          zobowiązującej do przeniesienia własności wielu rzeczy, które dostarczane są
                          osobno;
                        </li>
                        <li>
                          zawarcia umowy - w przypadku umowy o dostarczenie treści cyfrowych.
                        </li>
                      </ol>
                    </li>
                    <li>Aby Konsument mógł skorzystać z prawa odstąpienia od umowy musi poinformować Sprzedawcę,
                      korzystając z danych
                      podanych w § 2 Regulaminu, o swojej decyzji o odstąpieniu od umowy w drodze
                      jednoznacznego oświadczenia (na
                      przykład pismo wysłane pocztą lub informacja przekazana pocztą elektroniczną).
                    </li>
                    <li>Konsument może skorzystać z wzoru formularza odstąpienia od umowy umieszczonego na końcu
                      Regulaminu, jednak nie
                      jest to obowiązkowe.
                    </li>
                    <li>
                      Aby zachować termin do odstąpienia od umowy wystarczy, że Konsument wyśle informację
                      dotyczącą wykonania
                      przysługującego mu prawa odstąpienia od umowy przed upływem terminu do odstąpienia od
                      umowy.
                      <br/><br/>
                      <b>SKUTKI ODSTĄPIENIA OD UMOWY</b>
                    </li>
                    <li>W przypadku odstąpienia od zawartej umowy Sprzedawca zwraca Konsumentowi wszystkie
                      otrzymane od niego płatności,
                      w tym koszty dostarczenia towaru (z wyjątkiem dodatkowych kosztów wynikających z
                      wybranego przez Konsumenta
                      sposobu dostarczenia innego niż najtańszy zwykły sposób dostarczenia oferowany przez
                      Sprzedawcę), niezwłocznie,
                      a w każdym przypadku nie później niż 14 dni od dnia, w którym Sprzedawca został
                      poinformowany o decyzji
                      Konsumenta o wykonaniu prawa odstąpienia od umowy.
                    </li>
                    <li>Zwrotu płatności Sprzedawca dokona przy użyciu takich samych sposobów płatności, jakie
                      zostały przez Konsumenta
                      użyte w pierwotnej transakcji, chyba że Konsument zgodzi się na inne rozwiązanie, w
                      każdym przypadku Konsument
                      nie poniesie żadnych opłat w związku z tym zwrotem.
                    </li>
                    <li>Sprzedawca może wstrzymać się ze zwrotem płatności do czasu otrzymania towaru lub do
                      czasu dostarczenia mu
                      dowodu jego odesłania, w zależności od tego, które zdarzenie nastąpi wcześniej.
                    </li>
                    <li>
                      Sprzedawca prosi o zwracanie towaru na adres:
                      ul. Długa 43 niezwłocznie, a w każdym razie nie później niż 14 dni od dnia, w którym
                      Konsument poinformował Sprzedawcę o
                      odstąpieniu od umowy sprzedaży. Termin jest zachowany, jeżeli Konsument odeśle towar
                      przed upływem terminu 14
                      dni.
                    </li>
                    <li>Konsument ponosi bezpośrednie koszty zwrotu towaru.</li>
                    <li>Konsument odpowiada tylko za zmniejszenie wartości towaru wynikające z korzystania z
                      niego w sposób inny niż
                      było to konieczne do stwierdzenia charakteru, cech i funkcjonowania towaru.
                    </li>
                    <li>Jeśli towar ze względu na swój charakter nie może zostać odesłany w zwykłym trybie
                      pocztą Konsument również
                      będzie musiał ponieść bezpośrednie koszty zwrotu towarów. O szacowanej wysokości tych
                      kosztów Konsument zostanie
                      poinformowany przez Sprzedawcę w opisie towaru w Sklepie lub podczas składania
                      zamówienia.
                    </li>
                    <li>
                      W przypadku wystąpienia konieczności zwrotu środków za transakcję dokonaną przez
                      Konsumenta kartą płatniczą,
                      Sprzedawca dokona zwrotu na rachunek bankowy przypisany do tej karty płatniczej.
                    </li>
                  </ol>
                </section>

                <section id="contract-exceptions">
                  <h4>§ 8 WYJĄTKI OD PRAWA ODSTĄPIENIA OD UMOWY</h4>

                  <ol>
                    <li>
                      Prawo odstąpienia od umowy zawartej na odległość nie przysługuje Konsumentowi w
                      odniesieniu do umowy:
                      <ol class="a">
                        <li>w której przedmiotem świadczenia jest rzecz nieprefabrykowana, wyprodukowana
                          według specyfikacji
                          Konsumenta lub służąca zaspokojeniu jego zindywidualizowanych potrzeb;
                        </li>
                        <li>w której przedmiotem świadczenia jest rzecz ulegająca szybkiemu zepsuciu lub
                          mająca krótki termin
                          przydatności do użycia;
                        </li>
                        <li>w której przedmiotem świadczenia jest rzecz dostarczana w zapieczętowanym
                          opakowaniu, której po otwarciu
                          opakowania nie można zwrócić ze względu na ochronę zdrowia lub ze względów
                          higienicznych, jeżeli
                          opakowanie zostało otwarte po dostarczeniu;
                        </li>
                        <li>w której przedmiotem świadczenia są rzeczy, które po dostarczeniu, ze względu na
                          swój charakter, zostają
                          nierozłącznie połączone z innymi rzeczami;
                        </li>
                        <li>w której przedmiotem świadczenia są nagrania dźwiękowe lub wizualne albo
                          programy komputerowe
                          dostarczane w zapieczętowanym opakowaniu, jeżeli opakowanie zostało otwarte po
                          dostarczeniu;
                        </li>
                        <li>o dostarczanie dzienników, periodyków lub czasopism, z wyjątkiem umowy o
                          prenumeratę;
                        </li>
                        <li>w której cena lub wynagrodzenie zależy od wahań na rynku finansowym, nad którymi
                          przedsiębiorca nie
                          sprawuje kontroli, i które mogą wystąpić przed upływem terminu do odstąpienia od
                          umowy;
                        </li>
                        <li>o dostarczanie treści cyfrowych, które nie są zapisane na nośniku materialnym,
                          jeżeli spełnianie
                          świadczenia rozpoczęło się za wyraźną zgodą Konsumenta przed upływem terminu do
                          odstąpienia od umowy i
                          po poinformowaniu go przez przedsiębiorcę o utracie prawa odstąpienia od umowy.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </section>

                <section id="complaints">
                  <h4>§ 9 REKLAMACJE</h4>

                  <ol>
                    <li>W przypadku wystąpienia wady towaru Kupujący ma możliwość reklamowania wadliwego towaru
                      na podstawie
                      uregulowanej w Kodeksie cywilnym rękojmi lub gwarancji, o ile gwarancja została
                      udzielona.
                    </li>
                    <li>
                      Korzystając z rękojmi Kupujący może, na zasadach oraz w terminach określonych w Kodeksie
                      cywilnym:
                      <ol class="a">
                        <li>złożyć oświadczenie o obniżeniu ceny,</li>
                        <li>przy wadzie istotnej - złożyć oświadczenie o odstąpieniu od umowy,</li>
                        <li>żądać wymiany rzeczy na wolną od wad,</li>
                        <li>żądać usunięcia wady.</li>
                      </ol>
                    </li>
                    <li>Sprzedawca prosi o składanie reklamacji na podstawie rękojmi na adres pocztowy lub
                      elektroniczny wskazany w § 2
                      Regulaminu.
                    </li>
                    <li>
                      Jeśli okaże się, że dla rozpatrzenia reklamacji konieczne jest dostarczenie
                      reklamowanego towaru do Sprzedawcy,
                      Kupujący jest zobowiązany do dostarczenia tego towaru, w przypadku Konsumenta na koszt
                      Sprzedawcy, na adres
                      ul. Długa 43.
                    </li>
                    <li>Jeśli na towar została udzielona dodatkowo gwarancja, informacja o niej, a także o jej
                      warunkach, jest dostępna
                      w opisie produktu w Sklepie.
                    </li>
                    <li>Reklamacje dotyczące działania Sklepu należy kierować na adres e-mail wskazany w § 2
                      Regulaminu.
                    </li>
                    <li>
                      Rozpatrzenie reklamacji przez Sprzedawcę nastąpi w terminie do 14 dni.
                      <br/><br/>
                      <b>POZASĄDOWE SPOSOBY ROZPATRYWANIA REKLAMACJI I DOCHODZENIA ROSZCZEŃ</b>
                    </li>
                    <li>
                      W przypadku, gdy postępowanie reklamacyjne nie przyniesie oczekiwanego przez Konsumenta
                      rezultatu, Konsument
                      może skorzystać m.in. z:
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
                    </li>
                  </ol>
                </section>

                <section id="personal-data">
                  <h4>§ 10 DANE OSOBOWE</h4>

                  <ol>
                    <li>
                      Administratorem danych osobowych przekazanych przez Kupującego podczas korzystania ze
                      Sklepu jest Sprzedawca.
                      Szczegółowe informacje dotyczące przetwarzania danych osobowych przez Sprzedawcę – w tym
                      o pozostałych celach
                      oraz podstawach przetwarzania danych, a także o odbiorcach danych – znajdują się w
                      dostępnej w Sklepie Polityce
                      prywatności – ze względu na zasadę przejrzystości, zawartą w ogólnym rozporządzeniu
                      Parlamentu Europejskiego i
                      Rady (UE) o ochronie danych – „<strong>RODO</strong>”.
                    </li>
                    <li>
                      Celem przetwarzania danych Kupującego przez Sprzedawcę, podanych przez Kupującego w
                      związku z zakupami w
                      Sklepie, jest realizacja zamówień. Podstawą przetwarzania danych osobowych w tym
                      przypadku jest:
                      <ul>
                        <li>
                          umowa sprzedaży lub działania podejmowane na żądanie Kupującego, zmierzające do
                          jej zawarcia (art. 6
                          ust. 1 lit. b RODO),
                        </li>
                        <li>
                          ciążący na Sprzedawcy obowiązek prawny związany z rachunkowością (art. 6 ust. 1
                          lit. c) oraz
                        </li>
                        <li>
                          prawnie uzasadniony interes Sprzedawcy, polegający na przetwarzaniu danych w
                          celu ustalenia, dochodzenia
                          lub obrony ewentualnych roszczeń (art. 6 ust. 1 lit. f RODO).
                        </li>
                      </ul>
                    </li>
                    <li>
                      Podanie danych przez Kupującego jest dobrowolne, ale jednocześnie konieczne do zawarcia
                      umowy sprzedaży.
                      Niepodanie danych uniemożliwi zawarcie umowy sprzedaży w Sklepie.
                    </li>
                    <li>
                      Dane Kupującego podane w związku z zakupami w Sklepie będą przetwarzane do momentu, w
                      którym:
                      <ol class="a">
                        <li>
                          przestanie obowiązywać umowa sprzedaży zawarta między Kupującym a Sprzedawcą;
                        </li>
                        <li>
                          na Sprzedawcy przestanie ciążyć obowiązek prawny, zobowiązujący go do
                          przetwarzania danych Kupującego;
                        </li>
                        <li>
                          ustanie możliwość dochodzenia roszczeń przez Kupującego lub Sprzedawcę,
                          związanych z umową sprzedaży
                          zawartą przez Sklep;
                        </li>
                        <li>
                          zostanie przyjęty sprzeciw Kupującego wobec przetwarzania jego danych osobowych
                          – w przypadku gdy
                          podstawą przetwarzania danych był uzasadniony interes Sprzedawcy
                        </li>
                      </ol>
                      – w zależności od tego, co ma zastosowanie w danym przypadku i co nastąpi najpóźniej.
                    </li>
                    <li>
                      Kupującemu przysługuje prawo żądania:
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
                    </li>
                    <li>
                      W celu realizacji swoich praw, Kupujący powinien skontaktować się ze Sprzedawcą przy
                      wykorzystaniu danych z § 2
                      Regulaminu.
                    </li>
                    <li>
                      W przypadku gdy Kupujący uzna, że jego dane są przetwarzane niezgodnie z prawem,
                      Kupujący może złożyć skargę do
                      Prezesa Urzędu Ochrony Danych Osobowych.
                    </li>
                  </ol>
                </section>

                <section id="stricture">
                  <h4>§ 11 ZASTRZEŻENIA</h4>

                  <ol>
                    <li>Zakazane jest dostarczanie przez Kupującego treści o charakterze bezprawnym.</li>
                    <li>Każdorazowo składane w Sklepie zamówienie stanowi odrębną umowę sprzedaży i wymaga
                      osobnej akceptacji
                      Regulaminu. Umowa zawierana jest na czas i w celu realizacji zamówienia.
                    </li>
                    <li>Umowy zawierane na podstawie Regulaminu zawierane są w języku polskim.</li>
                    <li>Żadne z postanowień Regulaminu nie wyłącza lub w żadnym stopniu nie ogranicza uprawnień
                      Konsumenta
                      wynikających z przepisów prawa.
                    </li>
                    <li>
                      Postanowienia dotyczące towarów i umowy sprzedaży stosuje się odpowiednio do treści
                      cyfrowych i umowy o
                      dostarczanie treści cyfrowych,
                      o ile Regulamin nie określa tych kwestii odrębnie.
                    </li>
                  </ol>
                </section>

                <section id="buyers-not-customers">
                  <h4>§ 12 POSTANOWIENIA DOTYCZĄCE KUPUJĄCYCH NIEBĘDĄCYCH KONSUMENTAMI</h4>
                  <ol>
                    <li>
                      Prawo odstąpienia od umowy zawartej na odległość nie przysługuje podmiotowi innemu niż
                      Konsument.
                    </li>
                    <li>
                      Wszelka odpowiedzialność Sprzedawcy w stosunku do Kupującego niebędącego Konsumentem, w
                      granicach prawem dopuszczonych, jest wyłączona.
                    </li>


                    <li>
                      W przypadku ewentualnego sporu z Kupującym niebędącym Konsumentem sądem właściwym będzie
                      sąd właściwy dla
                      siedziby Sprzedawcy.
                    </li>
                  </ol>
                </section>
                <section id="attachment">
                  <h4>ZAŁĄCZNIK NR 1 DO REGULAMINU</h4>

                  <span class="description">
                    Poniżej znajduje się wzór formularza odstąpienia od umowy, z którego Konsument może, ale nie musi skorzystać:
                </span>

                  <br/><br/><br/>

                  <p class="center-align">
                    <strong>WZÓR FORMULARZA ODSTĄPIENIA OD UMOWY</strong><br/>
                    (formularz ten należy wypełnić i odesłać tylko w przypadku chęci odstąpienia od
                    umowy)
                  </p>

                  <br/><br/>

                  <p>
                    {{ companyName }}<br/>
                    {{ companyStreet }}<br/>
                    adres e-mail: {{ companyMail }}<br/>
                  </p>
                  <br/>

                  <p>
                    - Ja/My(*) .....................................................................
                    niniejszym informuję/informujemy(*)
                    o moim/naszym odstąpieniu od umowy sprzedaży następujących rzeczy(*) / o świadczenie
                    następującej usługi(*) /
                    o dostarczanie treści cyfrowych w postaci(*):<br/><br/>
                    ....................................................................................................................................................................................................................................<br/><br/>
                    ....................................................................................................................................................................................................................................<br/><br/>
                    ....................................................................................................................................................................................................................................<br/><br/>
                  </p>
                  <p>
                    - Data zawarcia umowy<sup>(*)</sup>/odbioru<sup>(*)</sup>
                    ..........................................................................................................................<br/><br/>

                    - Imię i nazwisko Konsumenta (-ów):
                    ..............................................................................................................................<br/><br/>

                    - Adres Konsumenta (-ów):
                    ..........................................................................................................................................<br/><br/>
                    ..................................................................................................................................................................................<br/><br/>
                  </p>
                  <br/>
                  <p class="right-align">
                    .............................................................................................<br/>
                    Podpis Konsumenta<br/>
                    <small>(tylko jeżeli formularz jest przesyłany w wersji papierowej)</small>
                    <br/><br/>

                    Data ............................................
                  </p>
                  <p class="right-align">
                    <small>(*) Niepotrzebne skreślić.</small>
                  </p>
                </section>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
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
      title: 'Zakupy w Sklepie',
      id: 'shop',
    },
    {
      title: 'Płatności',
      id: 'payments',
    },
    {
      title: 'Realizacja zamówienia',
      id: 'orders',
    },
    {
      title: 'Prawo odstąpienia od umowy',
      id: 'contract-rights',
    },
    {
      title: 'Wyjątki od prawa odstąpienia od umowy',
      id: 'contract-exceptions',
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
    {
      title: 'Postanowienia dotyczące Kupujących niebędących Konsumentami',
      id: 'buyers-not-customers',
    },
  ]
}
</script>


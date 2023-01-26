<template>
  <section class="home-about home-about--2">
    <div class="container home-about__wrapper">
      <h3 class="home-about__title title title--big home-about__title--mobile title--green">
        O nas
      </h3>
      <div class="home-about__img-wrapper">
        <img v-lazy-load src="~/static/images/img/o-nas.jpg" alt="O nas" class="home-about__img">
      </div>
      <div class="home-about__text-wrapper">
        <h3 class="home-about__title home-about__title--desktop title title--big title--green">
          O nas
        </h3>
        <p class="home-about__text text14">
          Jesteśmy parą zakochanych w zwierzakach maniaków dobrych książek i filmów.
        </p>
        <p class="home-about__text text14">
          Poprzez projekty kubków chcieliśmy się z tobą podzielić odrobiną naszych artystycznych umiejętności.
        </p>
        <p class="home-about__text text14">
          Jesteśmy otwarci na nowe wyzwania, więc jeżeli potrzebujesz czegoś specyficznego, spersonalizowanego
          lub w większych ilościach, jesteśmy do twojej dyspozycji.
        </p>
        <p class="home-about__text text14">
          Jesteśmy dostępni pod telefonem oraz mailem. Zapraszamy do kontaktu.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'AboutUsTop'
}
</script>

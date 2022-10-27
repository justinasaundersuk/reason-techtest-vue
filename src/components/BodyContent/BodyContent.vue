<template>
    <main role="main" id="content">
      <section class="hero-container">
        <div class="hero">
          <h1 title="Get online week 2021" alt="Get online week 2021">Get online week 2021</h1>
          <router-view></router-view>
          <a href="#" title="Get involved now!" alt="Get involved now!">Get involved now!</a>
        </div>
        <div class="hero-sideimage"><figure><img src="../../assets/images/pexels-christina-morillo.jpg" title="Our CTO Christina Morillo" alt="Picture of our CTO Christina Morillo"></figure></div>
        <div class="hero-content">
          <h2 title="We are a social change charity, helping people to improve their lives through digital." alt="We are a social change charity, helping people to improve their lives through digital.">We are a social change charity, helping people to improve their lives through digital.</h2>
          <p>We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and further afield.</p>
          <a href="#aboutus" title="Learn more about us" alt="Learn more about us">Learn more about us</a>
          <img src="../../assets/images/fingerprint.svg" alt="" title="" aria-hidden="true" />
        </div>
      </section>
      
      <section class="help">
          <h3 title="How can we help you?" alt="How we can help you?">How can we help you?</h3>
          <p>Let us know who you are and what you're looking for, and we'll help you get to the right place.</p>
          <div class="help-cta">
            <form method="post">
            I am 
            <select title="an individual" alt="an individual">
              <option title="an individual" value="anindividual">an individual</option>
            </select> 
            and I 
            <select title="want to learn" alt="want to learn">
              <option title="want to learn" value="wanttolearn">want to learn</option>
            </select> 
            <button title="Start now">Start now</button>
          </form>
          </div>
      </section>

      <section class="whatdowedo">
        <h3 title="What do we do?" alt="What do we do?">What do we do?</h3>
        <p>You might not have heard of us but we're the people behind the following impactful programmes.</p>
        <div class="cards">
          <div class="card">
            <h4 title="Get online week" alt="Get online week">Get online week</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <a href="#readmore" title="Read more" alt="Read more">Read more</a>
          </div>
          <div class="card">
            <h4 title="Get online week">Get online week</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <a href="#readmore" title="Read more" alt="Read more">Read more</a>
          </div>
          <div class="card">
            <h4 title="Get online week">Get online week</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <a href="#readmore" title="Read more" alt="Read more">Read more</a>
          </div>
          <div class="card">
            <h4 title="Get online week">Get online week</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <a href="#readmore" title="Read more" alt="Read more">Read more</a>
          </div>
        </div>
        <div class="cta"><a href="#moreaboutwhatwedo" title="More about what we do" alt="More about what we do">More about what we do</a></div>
      </section>
    </main>

    <h2>vuex navigation store:</h2>
    <div v-for="(navitem) in $store.state.navigation" :key="navitem.id">
      {{ navitem.id }} - {{ navitem.pagename }} - {{ navitem.url }}
    </div>
</template>

<style scoped>
@media only screen and (min-width: 62em) {
  .hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px 0;
    grid-template-areas: "hero hero" "hero-sideimage hero-content";
  }
}

.hero {
  grid-area: hero;
  padding: 50px 50px 20px 50px;
  height: 340px;
  background: url("../../assets/images/pexels-andrea-piacquadio.jpg") no-repeat;
  background-size: cover;
  background-position: 70%;
  text-align: center;
}
@media only screen and (min-width: 48em) {
  .hero {
    height: 440px;
    text-align: left;
  }
}
@media only screen and (min-width: 62em) {
  .hero {
    background-position: unset;
  }
}
.hero h1 {
  display: block;
  text-align: center;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: #487c8f;
  color: #ffffff;
}
@media only screen and (min-width: 48em) {
  .hero h1 {
    display: inline-block;
    font-size: 2rem;
    text-align: left;
  }
}
@media only screen and (min-width: 62em) {
  .hero h1 {
    font-size: 3.875rem;
  }
}
.hero p {
  margin: 0 0 1.5rem;
  padding: 1.5rem;
  background: #ffffff;
  color: #478175;
  font-size: 1.25rem;
  font-weight: bold;
}
@media only screen and (min-width: 48em) {
  .hero p {
    max-width: 50%;
  }
}
.hero a {
  background-color: #ffffff;
  color: #be3249;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.875rem;
  text-decoration: none;
  border: none;
  padding: 0.625rem 1rem;
}
.hero a:hover {
  cursor: pointer;
  text-decoration: underline;
}

.hero-sideimage {
  display: none;
}
@media only screen and (min-width: 62em) {
  .hero-sideimage {
    display: grid;
    grid-area: hero-sideimage;
  }
  .hero-sideimage img {
    width: 100%;
    height: 100%;
  }
}

.hero-content {
  grid-area: hero-content;
  position: relative;
  padding: 2rem 1.5rem;
  background: #478175;
  color: #ffffff;
  overflow: hidden;
}
@media only screen and (min-width: 75em) {
  .hero-content {
    padding: 3rem 2rem;
  }
}
.hero-content p {
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 2rem;
}
.hero-content a {
  background-color: none;
  color: #ffffff;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.875rem;
  text-decoration: none;
  border: 2px solid #ffffff;
  padding: 0.5rem 1rem;
}
.hero-content a:hover {
  cursor: pointer;
  text-decoration: underline;
}
.hero-content img {
  position: absolute;
  width: 75%;
  bottom: -15%;
  right: -15%;
  opacity: 0.1;
  transform: rotate(-35deg);
}
@media only screen and (min-width: 75em) {
  .hero-content img {
    bottom: -35%;
    right: -30%;
  }
}

.help {
  padding: 2rem 1.5rem;
  background-color: #ececec;
  color: #000000;
}
@media only screen and (min-width: 75em) {
  .help {
    padding: 2rem 3rem;
  }
}
.help h3 {
  margin-bottom: 1rem;
}
.help .help-cta, .help select {
  font-size: 0.875rem;
}
@media only screen and (min-width: 48em) {
  .help .help-cta, .help select {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 62em) {
  .help .help-cta, .help select {
    font-size: 1.5rem;
  }
}
.help .help-cta {
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 1.5rem;
  text-align: center;
}
@media only screen and (min-width: 62em) {
  .help .help-cta {
    padding: 2rem;
    background-color: #ffffff;
    text-align: left;
  }
}
.help .help-cta .dropdown {
  position: relative;
  display: inline-block;
}
.help .help-cta .dropdown i {
  position: absolute;
  top: 0;
  right: 10px;
}
.help .help-cta select {
  border-bottom: 2px solid #487c8f;
  color: #487c8f;
  font-weight: bold;
}
@media only screen and (min-width: 62em) {
  .help .help-cta select {
    margin: 0 1rem;
  }
}
.help .help-cta select:hover {
  cursor: pointer;
}
.help .help-cta button {
  background-color: #be3249;
  color: #ffffff;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.875rem;
  text-decoration: none;
  border: none;
  padding: 0.625rem 1rem;
  margin-top: 1.5rem;
}
.help .help-cta button:hover {
  cursor: pointer;
  text-decoration: underline;
}
@media only screen and (min-width: 48em) {
  .help .help-cta button {
    margin-top: 0;
  }
}

.whatdowedo {
  padding: 2rem 1.5rem;
  background-color: #487c8f;
  color: #ffffff;
  font-size: 1.5rem;
}
@media only screen and (min-width: 75em) {
  .whatdowedo {
    padding: 2rem 3rem;
  }
}
.whatdowedo h3, .whatdowedo p {
  color: #ffffff;
}
.whatdowedo h3 {
  margin-bottom: 1rem;
}
.whatdowedo p {
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}
.whatdowedo .cta {
  display: flex;
  justify-content: center;
  margin: 3rem 0 2rem;
}
.whatdowedo .cta a {
  background-color: #ffffff;
  color: #be3249;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.875rem;
  text-decoration: none;
  border: none;
  padding: 0.625rem 1rem;
}
.whatdowedo .cta a:hover {
  cursor: pointer;
  text-decoration: underline;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}
@media only screen and (min-width: 62em) {
  .cards {
    flex-direction: row;
    gap: 1rem;
  }
}
@media only screen and (min-width: 75em) {
  .cards {
    gap: 0;
  }
}

.card {
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  background: #ffffff;
  color: #000000;
}
.card h4, .card p {
  color: #000000;
}
.card h4 {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 0 1rem;
}
.card a {
  background-color: none;
  color: #be3249;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.875rem;
  text-decoration: none;
  border: 2px solid #292929;
  padding: 0.5rem 1rem;
}
.card a:hover {
  cursor: pointer;
  text-decoration: underline;
}

.events .event {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ececec;
  border-right: 1px solid #ececec;
  margin-top: 2rem;
}
.events figure {
  display: none;
}
@media only screen and (min-width: 48em) {
  .events figure {
    display: block;
    width: 50%;
  }
  .events figure img {
    width: 100%;
    height: 100%;
  }
}
.events .event-details {
  padding: 2rem;
  box-sizing: border-box;
  background-color: #ececec;
}
@media only screen and (min-width: 48em) {
  .events .event-details {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-shrink: 0;
    width: 50%;
  }
}
.events .event-details .description h3 {
  padding: 1rem;
  background-color: #478175;
  color: #ffffff;
}
.events .event-details .description h4 {
  padding: 0 1rem;
  font-weight: normal;
}
.events .event-details .details {
  padding: 0 1rem;
}
.events .event-details .details p {
  margin: 0;
  font-size: 0.875rem;
}
</style>

<script>
export default {
  name: 'GetInvolved'
}
</script>
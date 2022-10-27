<template>
    <a class="skip-to-main-content" href="#content" alt="Skip to main content">Skip to main content</a>
    <header>
      <nav class="nav" role="navigation" aria-labelledby="primary-navigation">
        <div class="nav-header">
          <div class="search">
            <a href="#" class="search" title="Search" alt="Search"><i class="fa fa-search" aria-hidden="true"></i> Search</a>
          </div>
          <div class="donate"><a href="#" class="underscore" title="Learn" alt="Learn">Learn</a><a href="#" class="highlight" title="Donate" alt="Donate">Donate</a></div>
        </div>
        <div class="nav-main">
          <a href="#home" title="Good Things Foundation" alt="Return to Good Things Foundation's homepage">
            <div class="logo">
              <img src="../../assets/images/fingerprint-inverse.svg" width="50" height="60" alt="Good Things Foundation thumb print site logo" />
              <div class="brand" alt="Good Things Foundation" title="Good Things Foundation">Good Things <span>Foundation</span></div>
            </div>
          </a>
          <ul class="nav" id="primary-navigation">
            <li><router-link :to="{ name: 'HomePage' }">Home</router-link></li>
            <li><router-link :to="{ name: 'WhatWeDo' }">What we do</router-link></li>
            <li><router-link :to="{ name: 'TheDigitalDivide' }">The digital divide</router-link></li>
            <li><router-link :to="{ name: 'GetInvolved' }">Get involved</router-link></li>
            <li><router-link :to="{ name: 'OurNetwork' }">OurNetwork</router-link></li>
            <li><router-link :to="{ name: 'Insights' }">Insights</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<style scoped>
nav {
  position: relative;
}
nav ul {
  list-style-type: none;
}
nav ul li {
  display: inline-block;
}

a.skip-to-main-content {
  position: absolute;
  padding: 0.6rem;
  background: #be3249;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: bold;
  left: calc(50% - 120px);
  transform: translateY(-100%);
  transition: transform 0.3s;
  opacity: 0;
}
a.skip-to-main-content:focus-within {
  opacity: 1;
  transform: translateY(0%);
}

.nav-header {
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-bottom: 1px solid #ececec;
}
@media only screen and (min-width: 75em) {
  .nav-header {
    padding: 0 50px;
  }
}
.nav-header a {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-decoration: none;
  color: #292929;
}
.nav-header a:hover {
  text-decoration: underline;
}
.nav-header a.underscore {
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
  border-bottom: 4px solid #478175;
}
.nav-header a.highlight {
  background: #be3249;
  color: #ffffff;
  border-bottom: 4px solid #be3249;
}
.nav-header .search {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
}
.nav-header .search a {
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
  transition: background-color 0.5s ease-in-out;
}
.nav-header .search a:hover {
  background-color: #ececec;
  text-decoration: none;
  transition: background-color 0.5s ease-in-out;
}
.nav-header .search i {
  font-size: 1.25rem;
}

.nav-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin: 20px 0;
}
@media only screen and (min-width: 75em) {
  .nav-main {
    padding: 0 50px;
    flex-direction: row;
    justify-content: space-between;
  }
}
.nav-main a {
  text-decoration: none;
}
.nav-main .logo {
  display: flex;
  align-items: center;
}
.nav-main .logo img {
  transform: rotate(-25deg);
}
.nav-main .logo .brand {
  color: #292929;
  font-size: 1.75rem;
}
.nav-main .logo span {
  display: block;
  font-size: 1rem;
  line-height: 1.25rem;
  text-indent: 3px;
}
@media only screen and (min-width: 75em) {
  .nav-main .logo span {
    font-size: 1rem;
    line-height: 0.875rem;
  }
}
.nav-main ul {
  padding-left: 0;
  text-align: center;
}
.nav-main ul li {
  text-align: center;
}
.nav-main ul a {
  display: inline-block;
  padding: 0.2rem 0.2rem;
  margin: 0.25rem 0.3rem;
  border-bottom: 2px solid #478175;
  font-size: 1rem;
  font-weight: bold;
  color: #292929;
  text-align: center;
}
@media only screen and (min-width: 75em) {
  .nav-main ul a {
    border-bottom: 3px solid transparent;
    transition: border 0.5s ease-in-out;
    text-align: left;
  }
  .nav-main ul a:hover {
    border-bottom: 3px solid #478175;
    transition: border 0.5s ease-in-out;
  }
}

.router-link-active {}

</style>

<script>
export default {
  name: 'Navigation'
}
</script>
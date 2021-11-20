<template>
  <b-navbar class="is-white px-6">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="title is-4 has-text-black">Pizza 🍕</h1>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{name: 'administrar'}" href="#"> Administrar </b-navbar-item>
      <!-- <b-navbar-item href="#"> Documentation </b-navbar-item> -->
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <div>
          <h1>🛒</h1>
        </div>
        <div class="buttons">
          <a class="button is-success">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light"> Log in </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
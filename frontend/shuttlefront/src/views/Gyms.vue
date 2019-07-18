<template>
  <div class="gyms">
    <h1>Gymnases</h1>
    <div class="contenu">
      <div class="liste">
        <div
          @click="select(key)"
          v-for="(gym, key) in gyms"
          :key="key"
          :class="{ selected: selected && selected.id === gym.id }"
        >
          {{ gym.name }}
        </div>
        <div class="ajout" @click="ajout">Ajouter</div>
      </div>
      <div v-if="selected" class="details">
        <h2>{{ selected.name }}</h2>
        <p>Adresse : {{ selected.address }}</p>
        <span @click="del" class="del">X</span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import { api } from "@/assets/js/api.js";

export default {
  data: function() {
    return {
      gyms: [],
      selectedIndex: null
    };
  },

  mounted: async function() {
    try {
      this.gyms = await api("GET", "gyms");
      if (this.gyms && this.gyms.length >= 1) {
        this.selectedIndex = 0;
      }
    } catch (e) {
      alert("Erreur de chargement");
    }
  },

  methods: {
    select(ind) {
      this.selectedIndex = ind;
    },

    async ajout() {
      try {
        let name = prompt("Nom du gymnase ?");
        if (name) {
          let address = prompt("Adresse du gymnase ?");
          if (address) {
            let newGym = {
              name: name,
              address: address
            };
            let res = await api("POST", "gyms", null, newGym);
            this.gyms.push(res);
            this.selectedIndex = this.gyms.length - 1;
          }
        }
      } catch {
        alert("Impossible d'ajouter un gymnase :(");
      }
    },

    async del() {
      if (confirm("Supprimer ce gymnase ?")) {
        try {
          let res = await api("DELETE", "gyms", [this.selected.id]);

          if (res) {
            this.gyms.splice(this.selectedIndex, 1);
            if (this.gyms.length >= 1) {
              if (this.selectedIndex >= 1) {
                this.selectedIndex--;
              } else {
                this.selectedIndex = 0;
              }
            }
          }
        } catch (e) {
          alert("Erreur de suppression du Gymnase");
          console.log(e);
        }
      }
    }
  },

  computed: {
    selected: function() {
      return this.gyms[this.selectedIndex];
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
}

.contenu {
  display: grid;
  grid-template-columns: 300px auto;
  grid-gap: 10px;
}

.liste {
  display: grid;
  grid-gap: 3px;
  grid-auto-rows: min-content;

  div {
    display: grid;
    cursor: pointer;
    border: 1px #ccc solid;
    align-content: center;
    justify-items: center;
    padding: 3px;
  }

  .selected {
    background-color: rgb(246, 246, 213);
  }
}

.details {
  position: relative;
  border: 1px #ccc solid;
  padding: 5px;
}

.ajout {
  font-weight: bold;
}

.del {
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  background-color: rgb(255, 52, 52);
  border: 1px #ccc solid;
  padding: 2px;
  font-weight: bold;
  cursor: pointer;
}
</style>

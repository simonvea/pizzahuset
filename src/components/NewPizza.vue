<template>
    <form>
        <h3>Legg til ny pizza:</h3>

        <div class="form-group row">
            <label class="col-sm-3">Navn</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3">Beskrivelse</label>
            <div class="col-sm-9">
                <textarea type="text" class="form-control" rows="5" v-model="newPizza.description"></textarea>
            </div>
        </div>

        <p><strong>Alternativ 1:</strong></p>
        <div class="form-group row">
            <label class="col-sm-3">Størrelse (M/S)</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[0].size">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3">Pris</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[0].price">
            </div>
        </div>

        <p><strong>Alternativ 2:</strong></p>
        <div class="form-group row">
            <label class="col-sm-3">Størrelse (M/S)</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[1].size">
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3">Pris</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" v-model="newPizza.options[1].price">
            </div>
        </div>

        <div class="form-group row">
            <button type="button" class="btn btn-success btn-block" @click="addMenuItem()">Legg til</button>
        </div>
    </form>
</template>

<script>
import { dbMenuRef } from "../firebaseConfig"

export default {
    data() {
        return {
            newPizza: {
                'name': 'F.eks Margherita',
                'description': 'F.eks En nydelig pizza toppet med mozzarella',
                'options': [{
                    'size': "Medium",
                    'price': 89
                }, {
                    'size': "Stor",
                    'price': 119
                }]
            }
        }
    },
    methods: {
        addMenuItem() {
            dbMenuRef.push(this.newPizza);
        }
    }
}
</script>


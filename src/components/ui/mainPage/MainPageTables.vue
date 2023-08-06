<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <main-page-table header="Ostatnie wydatki" :rows="itemsExpenses"/>
            </div>
            <div class="col">
                <main-page-table header="Planowe wydatki"  :rows="itemsRecuringExpenses"/>
            </div>
            <div class="col">
                <main-page-table header="Przychody" :rows="itemsRevenue"/>
            </div>
            <div class="col">
                <main-page-table header="Planowane przychody" :rows="itemsRecuringRevenue" />
            </div>
        </div>
    </div>
</template>

<script>
import MainPageTable from './MainPageTable.vue'
export default {
    name: 'App',
    components: {
        MainPageTable
    },
    data() {
        return {
            itemsExpenses: [
                {
                    operation: "Agraf group Sp. z o.o.",
                    date: "04.08.2023",
                    amount: 26.26,
                },
                {
                    operation: "JMP S.A. Biedronka 333",
                    date: "04.08.2023",
                    amount: 89.72,
                },
                {
                    operation: "Gospodarstwo Filipczyk",
                    date: "04.08.2023",
                    amount: 11.90,
                }
            ],
            itemsRecuringExpenses: [
                {
                    operation: "Tauron",
                    date: "04.08.2023",
                    amount: 170,
                },
                {
                    operation: "Rata",
                    date: "04.08.2023",
                    amount: 8950,
                },
                {
                    operation: "Coś tam",
                    date: "04.08.2023",
                    amount: 885,
                }
            ],
            itemsRevenue: [
                {
                    operation: "Gk",
                    date: "04.08.2023",
                    amount: 9999,
                },
                {
                    operation: "Yakudo",
                    date: "04.08.2023",
                    amount: 9999,
                },
                {
                    operation: "Coś tam",
                    date: "04.08.2023",
                    amount: 150,
                }
            ],
            itemsRecuringRevenue: [
                {
                    operation: "500+",
                    date: "04.08.2023",
                    amount: 1000,
                },
                
            ],
        }
    }
}
</script>
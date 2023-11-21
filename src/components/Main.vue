<template>
    <main>
        <section id="consultant">
            <div class="container">
                <h4>Our consultants can help you</h4>
                <div class="border-green"></div>
            </div>
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-6" v-for="(consultant, cIndex) in this.store.consultants">
                        <h5>{{ consultant.title }}</h5>
                        <p>{{ consultant.text }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="about-us">
            <div class="row">
                <div class="col-8">
                    <img :src="'/images/business-people-working-together-on-project-and-5FHSKBL.jpg'" alt="">
                </div>
                <div class="col-4 text-light p-5">
                    <h4>about us</h4>
                    <div class="border-green"></div>
                    <h2 class="text-light">We make your strategy work</h2>
                    <p class="text-light">We constantly collect and analyze data from your reference scenario to arrive at
                        accurate decisions that
                        allow you to make the most of market opportunities. To grow you need a strategy, which combines
                        experience, data analysis, gradual definition of objectives. We study your business and design the
                        best
                        strategy for you.</p>
                </div>
            </div>
            <div class="get-started me-4">
                <div class="d-flex align-items-center justify-content-around">
                    <h3 class="w-25">We help to deliver the business case</h3>
                    <p class="w-50">We find that success comes from employing an “inside company” approach to help us better
                        understand the
                        internal dynamics and factors that are as critical to a positive outcome as the external conditions.
                    </p>
                </div>
                <button class="btn text-uppercase text-light">Get started</button>
            </div>
        </section>
        <section id="project">
            <h4 class="text-light">project</h4>
            <div class="border-green"></div>
            <h3 class="text-light">Our expert trusted consultants help clients</h3>
            <div class="row">
                <div class="col-4" v-for="(project, indexP) in this.store.projects">
                    <img :src="project.image" :alt="project.content">
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { store } from './data/store';
export default {
    name: 'Main',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

#consultant {
    width: 95%;
    float: right;
    background-color: $lightColor;

    .border-green {
        width: 4%;
        height: 4px;
        border: 2px solid $mainGreen;
    }
}

#about-us {
    float: left;

    img {
        width: 100%;
        height: 550px;
        object-fit: cover;
        object-position: top;
    }

    .get-started {
        position: relative;
        background-color: $mainGreen;
        padding: 100px;
        margin-bottom: 160px;

        button {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: $mainRed;
            padding: 20px 80px;
            border-radius: 1px;
        }
    }

}

#project {
    padding: 20px;

    img {
        width: 450px;
    }
}
</style>
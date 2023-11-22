<template>
    <main>
        <section id="consultant">
            <div class="d-flex align-items-center justify-content-between">
                <h2>Our consultants can help you</h2>
                <div class="border-green"></div>
            </div>
            <div class="info-consultant">
                <div class="row justify-content-between">
                    <div class="col-6" v-for="(consultant, cIndex) in this.store.consultants">
                        <div class="d-flex align-items-start p-4">
                            <i :class="consultant.icon"></i>
                            <div class="px-5">
                                <h4>{{ consultant.title }}</h4>
                                <p class="fw-light">{{ consultant.text }}</p>
                            </div>
                        </div>
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
                    <div class="d-flex align-items-center">
                        <div class="border-green small-line"></div>
                        <h6 class="mx-3 text-uppercase pt-2 fw-light">about us</h6>
                    </div>
                    <h1 class="text-light fw-bold">We make your strategy work</h1>
                    <p class="text-light fw-lighter pt-4">We constantly collect and analyze data from your reference
                        scenario to
                        arrive at
                        accurate decisions that
                        allow you to make the most of market opportunities. To grow you need a strategy, which combines
                        experience, data analysis, gradual definition of objectives. We study your business and design the
                        best
                        strategy for you.</p>
                </div>
            </div>
            <div class="get-started me-4">
                <div class="d-flex align-items-center justify-content-evenly">
                    <h2 class="w-25">We help to deliver the business case</h2>
                    <p class="fw-light">We find that success comes from employing an “inside company” approach to help
                        us better
                        understand the
                        internal dynamics and factors that are as critical to a positive outcome as the external conditions.
                    </p>
                </div>
                <button class="btn text-uppercase text-light">Get started</button>
            </div>
        </section>
        <section id="project">
            <div class="container">
                <div class="text-light text-uppercase fw-light">Project</div>
                <h1 class="text-light text-uppercase pb-4">Our expert trusted consultants help clients</h1>
                <div class="row justify-content-between">
                    <div class="col-4" v-for="(project, indexP) in this.store.projects">
                        <div class="project-card">
                            <div class="image-project">
                                <img :src="project.image" :alt="project.content">
                                <h5 class="text-center pt-4">{{ project.content }}</h5>
                            </div>
                            <div class="hidden-content">
                                <h5>{{ project.content }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="testimonial">
            <h5 class="text-light text-center fw-light text-uppercase">testimonial</h5>
            <h1 class="text-light p-4">What's the customer say about our work</h1>
            <div class="row ms-4">
                <div class="col-4 bg-light g-1" v-for="(opinion, indexOp) in this.store.opinions">
                    <div class="container-overlay">
                        <div class="front p-5">
                            <p class="fw-light">{{ opinion.text }}</p>
                            <h4 class="pt-5">{{ opinion.name }}</h4>
                            <p>{{ opinion.company }}</p>
                        </div>
                        <div class="overlay">
                            <img :src="opinion.image" :alt="opinion.name">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="blog" class="px-4">
            <h4 class="text-light">blog</h4>
            <div class="border-green"></div>
            <div class="d-flex justify-content-between align-items-center">
                <h3 class="text-light">The recent news you must read it</h3>
                <button class="btn text-uppercase">view all</button>
            </div>
            <div class="row justify-content-between">
                <div class="col-6 blog-info" v-for="(blog, indexBlog) in this.store.blogInfo">
                    <img :src="blog.image" :alt="blog.title">
                    <div class="col-8 bg-light info-over">
                        <div class="d-flex">
                            <p>{{ blog.date }} - </p>
                            <p> by {{ blog.name }}</p>
                        </div>
                        <h5>{{ blog.title }}</h5>
                        <p>{{ blog.text }}</p>
                    </div>
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

main {
    #consultant {
        width: 95%;
        float: right;
        background-color: $lightColor;

        h2 {
            padding: 100px;
        }

        .info-consultant {
            padding: 0px 100px 100px;

            i {
                font-size: 35px;
                background-color: $mainRed;
                padding: 15px;
                border-radius: 50px;
                color: $lightColor;
            }
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

        h1 {
            font-size: 60px;
            line-height: 60px;
        }

        .get-started {
            position: relative;
            background-color: $mainGreen;
            color: $blueHeader;
            padding: 100px;
            margin-bottom: 160px;

            p {
                width: 35%;
            }

            button {
                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 1;
                cursor: pointer;
                font-weight: 300;
                background-color: $mainRed;
                padding: 20px 60px;
                border-radius: 1px;
                transition: color 0.5s ease-in;

                &:after {
                    content: '';
                    position: absolute;
                    display: block;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%);
                    width: 0;
                    height: 100%;
                    background-color: $blueHeader;
                    z-index: -1;
                    transition: width 0.3s ease-in;
                }

                &:hover {
                    color: $lightColor;
                    border-color: $blueHeader ;

                    &:after {
                        width: 100%;
                    }
                }
            }
        }

    }

    #project {
        margin-bottom: 180px;
        position: relative;

        .project-card {
            margin-top: 50px;
            position: relative;
            width: 400px;
            height: 300px;
            border-radius: 10px;
            box-shadow: 0 5px 20px $blueHeader;
            transition: 0.3s;
            padding: 50px 50px;
            background: $lightColor;
            cursor: pointer;

            &:hover {
                height: 400px;
                box-shadow: 0 5px 20px red;
            }

            .image-project {
                position: relative;
                width: 100%;
                height: 100%;
                transform: translateY(-80px);
                z-index: 5;

                h5 {
                    color: $blueHeader;
                }

                img {
                    width: 100%;
                    border-radius: 10px;
                    box-shadow: 0 5px 20px $blueHeader;

                    &:hover {
                        opacity: 0.7;
                    }
                }
            }

            .hidden-content {
                padding: 180px 50px;
                text-align: center;
                transform: translateY(-300px);
                opacity: 0;
                transition: 0.3s;
                word-wrap: wrap;
            }

            &:hover>.hidden-content {
                opacity: 1;
                transform: translateY(-230px);
            }
        }
    }

    #testimonial {
        margin-bottom: 160px;

        h1 {
            text-align: end;
        }

        .container-overlay {
            position: relative;

            .front {
                position: absolute;
                top: 0;
                left: 0;
                color: black;
                transition: .6s ease;
            }

            .overlay {
                img {
                    width: 100%;
                    opacity: 0;
                    transition: all .6s ease;
                }
            }

            &:hover .overlay img {
                opacity: 1;

                &::after {
                    color: white;
                }
            }
        }

        // .container-overlay {
        //     .front {
        //         display: block;
        //         width: 300px;
        //         height: auto;
        //     }

        //     .overlay {
        //         img {
        //             position: absolute;
        //             top: 0;
        //             bottom: 0;
        //             left: 0;
        //             right: 0;
        //             height: 100%;
        //             width: 100%;
        //             opacity: 0;
        //             transition: .6s ease;
        //             z-index: 2;
        //         }
        //     }

        //     &:hover .overlay img {
        //         opacity: 1;
        //     }
    }
}

#blog {
    button {
        background-color: $mainGreen;
        padding: 20px 80px;
        border-radius: 1px;

    }

    .blog-info {
        margin-bottom: 60px;

        img {
            width: 685px;
        }

        .info-over {
            position: relative;
            top: -200px;
            right: -230px;
            font-size: 20px;

            padding: 40px 60px;
        }
    }
}

.border-green {
    width: 50%;
    height: 4px;
    border: 2px solid $mainGreen;

}

.small-line {
    width: 10%;
}
</style>
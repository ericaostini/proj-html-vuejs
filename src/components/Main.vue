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
                        <div class="border-green medium-line"></div>
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
            <div class="row">
                <div class="col-4 bg-light g-0" v-for="(opinion, indexOp) in this.store.opinions">
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
            <div class="d-flex align-items-center">
                <div class="border-green small-line"></div>
                <h5 class="mx-3 text-uppercase pt-2 fw-light text-light">blog</h5>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="text-light">The recent news you must read it</h1>
                <button class="btn text-uppercase">view all</button>
            </div>
            <div class="row justify-content-between">
                <div class="col-6 blog-info" v-for="(blog, indexBlog) in this.store.blogInfo">
                    <img :src="blog.image" :alt="blog.title">
                    <div class="col-8 info-over">
                        <div class="d-flex">
                            <p>{{ blog.date }} - </p>
                            <p> by {{ blog.name }}</p>
                        </div>
                        <h3>{{ blog.title }}</h3>
                        <p class="text-dark fw-lighter fs-6">{{ blog.text }}</p>
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
                transition: .3s ease;
                z-index: 10;
            }

            .overlay {
                color: white;

                img {
                    width: 100%;
                    opacity: 0;
                    transition: all .6s ease;
                }
            }

            &:hover .overlay img {
                opacity: 1;
            }

            &:hover .front {
                color: white;
            }
        }
    }
}

#blog {
    position: relative;

    button {
        position: absolute;
        top: 20px;
        right: 25px;
        z-index: 1;
        cursor: pointer;
        font-weight: 300;
        background-color: $mainGreen;
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
            background-color: $mainRed;
            z-index: -1;
            transition: width 0.3s ease-in;
        }

        &:hover {
            color: $lightColor;
            border-color: $mainRed ;

            &:after {
                width: 100%;
            }
        }
    }

    .blog-info {

        img {
            width: 660px;
            position: relative;
            transition: 0.5s all ease-in-out;
        }

        .info-over {
            position: relative;
            top: -200px;
            right: -215px;
            font-size: 20px;
            padding: 40px 60px;
            z-index: 2;
            transition: 0.5s all ease-in-out;
            transform: translateY(-40px);
            background: $lightColor;

            p {
                color: $mainRed;
            }
        }

        &:hover .info-over {
            transform: translateY(0px);
            background: $mainGreen;
        }

        &:hover {
            transform: translate3D(0, -1px, 0) scale(1.01);
            transition: all .4s ease;
            cursor: pointer;
        }

    }
}

.border-green {
    width: 50%;
    height: 4px;
    border: 2px solid $mainGreen;

}

.medium-line {
    width: 10%;
}

.small-line {
    width: 3%;
}
</style>
<template>
    <button class="btn btn-light"><i class="fa-regular fa-comment" @click="showChat()"></i></button>
    <div id="chat" class="bg-light" :class="show ? 'hidden' : 'show'">
        <div class="top-chat">
            <div class="d-flex justify-content-center">
                <p class="m-2"><i class="fa-regular fa-message m-1"></i>Ask</p>
                <p class="m-2"><i class="fa-solid fa-magnifying-glass m-1"></i>Faq</p>
            </div>
            <div class="user d-flex justify-content-center ">
                <i class="fa-regular fa-user" v-for="(user, index) in 5"></i>
            </div>
            <div class="text-center m-4">
                <span>Start a conversation</span> <br>
                <span class="fw-light">What channel you prefer?</span>
            </div>
        </div>
        <div class="bottom-chat">
            <div class="d-flex align-items-center email">
                <i class="fa-regular fa-paper-plane m-3 "></i>
                <div>
                    <p class="fs-6">Email</p>
                    <p class="fs-6 fw-light">No time to wait around? We usually respond within a few hours</p>
                </div>
            </div>
            <div class="d-flex align-items-center chat">
                <i class="fa-regular fa-comment-dots m-3"></i>
                <div>
                    <p class="fs-6">Chat</p>
                    <p class="fs-6 fw-light">We're online right now, talk with our team in realt time</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    data() {
        return {
            show: false
        }
    },
    methods: {
        showChat() {
            this.show = !this.show
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
    padding: 12px 15px;
    background-color: $chatColor;
    border-radius: 50px;
    border-color: $chatColor;

    i {
        font-size: 30px;
        color: $lightColor;
    }

    &:hover i {
        color: black;
    }
}

#chat {
    position: fixed;
    bottom: 100px;
    right: 30px;
    z-index: 100;
    height: 520px;
    width: 25%;
    border-radius: 10px;

    .top-chat {
        background-color: $chatColor;
        height: 40%;
        color: $lightColor;
        border-radius: 10px;

        .user {
            margin-top: 10px;

            i {
                margin: -5px;
                color: $darkColor;
                padding: 10px 12px;
                border-radius: 50px;
                border: 1px solid $darkColor;
                background-color: $lightColor;
            }
        }
    }

    .bottom-chat {
        .email {
            position: relative;
            top: -35px;
            margin: 5px 5px 0px;
            box-shadow: 5px 2px 5px $chatColor;
            background-color: $lightColor;
            border-radius: 10px;
            padding: 10px;

            i {
                font-size: 40px;
                color: $chatColor;
            }

            &:hover {
                border: 2px solid $chatColor;
            }
        }

        .chat {
            margin: 5px 5px 0px;
            box-shadow: 5px 2px 5px $chatColor;
            background-color: $lightColor;
            border-radius: 10px;
            padding: 10px;

            i {
                font-size: 40px;
                color: $chatColor;
            }

            &:hover {
                border: 2px solid $chatColor;
            }
        }
    }
}

.show {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;

}

.hidden {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
</style>
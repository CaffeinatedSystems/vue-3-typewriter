<script setup>
    import { onMounted,  ref } from 'vue';

    const props = defineProps({
        'textArray': {
            type: Array,
            default: [' this', ' and that'],
        },
            'pauseAtStart': {
            type: Number,
                default: 1500,
        },
        'pauseAtEnd': {
            type: Number,
                default: 4000,
        },
        'typeSpeed': {
            type: Number,
            default: 75,
        },
        'typedSpanClass': {
            type: String,
            default: 'text-red-600',
        },
        'staticSpanClass': {
            type: String,
            default: '',
        },
    })
    let charIndex = ref(0);
    let textIndex = ref(0);
    let text = ref('type');
    let direction = ref('forward');

    const startTyping = () => {
	
	console.log(typingInterval);
       let current = props.textArray[textIndex.value];
       if (charIndex.value > current.length) {
           direction = 'backward';
           clearInterval(typingInterval);
           setTimeout(function(){
               typingInterval = setInterval(startTyping, props.typeSpeed);
            }, props.pauseAtStart);
        }
        text.value = current.substring(0,charIndex.value);
        if(direction === 'forward') {
            charIndex.value++;

        } else {
            if(charIndex.value === 0){
                direction = 'forward';
                clearInterval(typingInterval);
                setTimeout(function() {
                    textIndex.value++;
                    if(textIndex.value >= props.textArray.length) {
                        textIndex.value = 0;
                    }
                    typingInterval = setInterval(startTyping, props.typeSpeed);
                }, props.pauseAtEnd);
            }
            charIndex.value--;
        }
    }
    let typingInterval = setInterval(startTyping, props.typeSpeed);
    onMounted(() => {
         startTyping();
    });
</script>
<template>
    <div >
        <h1>
            <span :class="staticSpanClass"><slot></slot></span>
            <span :class="typedSpanClass" v-text="text"></span>
        </h1>
    </div>
</template>

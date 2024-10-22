<template>
  <div class="row mx-3">
    <div class="image1 col-4 rounded-lg">
      <h3 class="text-left">Everyday Fresh & Clean with Our Products</h3>
      <fwb-button color="pink" class="button"
        >Shop Now -></fwb-button
      >
    </div>
    <div class="image2 col-4 rounded-lg">
      <h3 class="text-left">Make your Breakfast Healthy and Easy</h3>
      <fwb-button color="default" class="button"
        >Shop Now -></fwb-button
      >
      <img class="img"  src="https://s3-alpha-sig.figma.com/img/2738/f29f/1c4542246febe8c91ddb74ce42b81c5d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ie5ZOJdgYQSTzVAGuAOvTn~0aq9CjNbAKuc9CqLGI3emStzYgDNQ9JzcWzpGVZjK8QqZLE58Eivd7pyDNSJ2vTvNmr-71E~gDd5OHzTWQYASWN1BczKPrtZjxdMAlOFx8QBD4pvwh3OyrojSPhpusDWtlixVbtIv610zV0Spllm9zGwpGyLsZUYUAmOWtT6ZrUChdpcczsMiWiPLScWt0gMFda~WwZtA5R8jqw1lSZ54kx6gJBTBPb9mx2afTRe-BE11jN1xkQ0yssg2hf~lKgyDy36vxfofzqLujabRE8AGbKqzViCV5NrJsNpOHovMS~QatRYJi2syrCR7duivDw__" alt="">
    </div>
    <div class="image3 col-4  rounded-lg">
      <h3 class="text-left">The Best Organic Products Online</h3>
      <fwb-button color="default" class="button "
        >Shop Now -></fwb-button
      >
    </div>
  </div>
</template>

<script setup>
import { FwbButton } from "flowbite-vue";
</script>

<style>
.img{
    height: 15rem;
    position: absolute;
    bottom: 10px;
    right: 0px;
}
h3 {
  width: 16rem;
  position: absolute;
  top: 3.5rem;
}
.button {
  position: absolute;
  top: 11rem;
  background-color: rgb(57, 207, 57);
  color: white;
  border: 0px solid;
}
.button:hover{
    background-color: rgb(206, 131, 12);
}
.image1,
.image2,
.image3 {
  display: inline-block;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  height: 18rem;
  margin-top: 3rem;
}
.image1 {
  background-image: url("https://s3-alpha-sig.figma.com/img/de8c/488a/87b9ce16acd7436a6dec758331c840bc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtNkbS-I8-b~NaK4z4EwdUce~f2k9t~Krk0but4KnY9iaEuHd3X2i6raQ-vdhd8mbsCxO7sAjH1sk7gbVNiazWy6tcSvp3AceQvg5e8QYPyRkXsjWp8MwCs1qxZbSqrqnE1OUxInjbnkz57BGozO0Swh22BlActKcwibXUADQiksBiTRTtv7zfk3kmRAOkv--a0fzTGfzbr6Pr1BLlhdh3ROP2~7wJgvJw1bucJeef3IBZaUziVznmmlsQX6KrsBfmxHLTln1W~gIcWfCu4vU9y9r7fm5~fd0O50mWmwHHUUdCDCanr~KdvP7QBM6Ko7IBVIv9BZVq3ynQTdRHQ0xQ__");
  /* width: 10rem; */
}
.image3 {
  background-image: url("https://s3-alpha-sig.figma.com/img/4d69/6151/8879bc373bf5fcc1578bcec5172b087b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EyC137-mdXrvcqW7TA0JN44XT81MclA9ukgiVLvrVWFgbTl2Mq7vxBg-gTas9n0GNgy0lXjfXJqNmz-stsyVfbgV6h7QkHM8LgTEs9NK0EdzZWwMIIPfQMAg85vhsDjskGoQYDYFdQRdupt6oqwbV48fe8frpefOKvmKQcO6aFI3qmhBQbHaJ1N9sIzUX5PrVCVqy6Ue69ZZRWJFK6s0T~CauUDevWinTYZ1LS7ymN90n0ApTLSVxhNDgFxwA99APAjyPSRVMAoBTvhY3tk7Q8hIYl99Amuu~SSpJjKUJtb1W~zjt4R7KGWd4ivu9xpstWfB685TUATfiSQuSkFHrA__");
}
</style>

<hr />

<style lang="scss">
  hr {
    background: linear-gradient(90deg, #e7e7e9 0%, #f7f7f7 100%);
    margin: 0;
    border: 0;
    @include widescreen {
      height: 10px;
    }
    @include desktop {
      height: vw(10px);
    }
    @include tablet {
      height: 0.8vw;
    }
    @include mobile {
      height: 2vw;
    }
  }
</style>

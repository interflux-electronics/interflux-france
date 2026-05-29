<script lang="ts">
  import Flag from '$lib/components/Flag.svelte';
  import Line from '$lib/components/Line.svelte';
  import { page } from '$app/state';
  import { spanEachWord } from '$lib/helpers/spanEachWord';

  interface Props {
    h1: string;
    theme: 'selective' | 'screwdriver' | 'processor' | 'none';
  }

  let { h1 = '', theme }: Props = $props();

  let showFlag = $derived(page.url.pathname == '/assistance');

  const france = {
    id: 'FR',
    nameNative: 'France',
    nameEnglish: 'France'
  };
</script>

<section id="hero" data-theme={theme} class={theme}>
  <div class="liner">
    <div class="bg">
      <div class="preload"></div>
      <div class="high-res"></div>
    </div>

    <h1>
      {@html spanEachWord(h1)}
      {#if showFlag}
        <nobr>
          <span class="word">
            <Flag country={france} size="large" />
          </span>
          <span class="space">&nbsp;</span>
        </nobr>
      {/if}
    </h1>
  </div>
</section>
<Line />

<style lang="scss">
  @use '$lib/styles/variables/cdn' as *;

  #hero {
    position: relative;
    overflow: hidden;
    background-color: var(--blue-4);
    @include widescreen {
      height: 320px;
    }
    @include desktop {
      height: vw(320px);
    }
    @include tablet {
      height: 48vw; // 440 / 900
    }
    @include mobile {
      height: 100vw; // 600 / 600
    }

    &.selective {
      .preload {
        @include desktop-and-up {
          background-image: url('data:image/webp;base64,UklGRo4CAABXRUJQVlA4IIICAADQDACdASo8ABAAPjESh0KiIQwDABABglsAJ0yhHO3qvEB6fdq8kDgAfcBvgOek5wDrAPQA8tH2UP3IoQXD76XjBcZ0BP+4wQHJ9Z13pf2COkP5IA+7qQwIcI7qHZpwVpHnRi8X8ROagrzdmxpkT1AA/vot7AJ1t82R3UX+mdcwabPrMwV0Y9LckJX0sf3IVzeNhiw/E7Au5EN6tezt1M8mFMCaTaHh3iNn+lJzf+KPasxQ4706qax6f7dgWXg0A3Qw/7//5ZaDEXfl48cmDk9lk858N4t/wM/sB9hC2UqSQ5u1Dr5smwcd6GSwbfXTFNHeXFVMryv1zszu13y+VhxXmZBDkLrhgNQDzcGMtTLQBgiqYo04fNxU4itszEPqv/Mx5z9halObkkA4dEID/OT7ZY1bsUbySD8gLv491/ItGk2c5nn/4Rztm0yWyP9XsUc6zro16rkDv+15MyjPWAxSB+cXgcFmh/JdAXsLOO0Hyh2p08Hr7A26e1lDbij4XN/SR+NAdR4FTR9Z4chUZvHCDqadZCF4K6XGvbyZKCQNHy6y896l0tiiWZfdvAYEPN7h2sa4JPkg7mCF2D5AU/pjoJlOkjgcGuFbhQ1xBARoXzWvKnKqP7FJfR/z+3lLtu7vin2D7PtrxAossAuRsb4ki61cTc62nqrrze/T/l/QcUmE+//n9dKYVLUfzu/Ay0cFP9as1Jrb9Gc/whadkDe9VrISRos2bSmjuuxzoNlOk9+E7n6KkHXDjFW2hpQdBuq9MemLE4Xq1j2k9RPx1PgWPQUbzOa98MbzizwKe/hPXjegnBkk1Xgl0CVZWJrA8cmFLYbhq2Bc2IO656fLrUPIAAA=');
        }
        // @include tablet {
        //   background-image: url('data:image/webp;base64,UklGRqwDAABXRUJQVlA4IKADAABwEwCdASotABYAPjEUiEMiISEVXAYAIAMEtgBOmUI9r9A8wSif2H75bQiQLkz0gNsB5gP2H9E/9VfcB6AH+A6hb0O+lE/cn9qvaIu4mrM9G/KDKP/gPED+gbpz+q5Jl8t/wGjJacV9s3xTf433Ae1n6H/6PuEfyb+nf5/1ZuqHHks//UM2wwYL2CKNnRdzeQqxofHXRXC5v7HhoZV5IAxTplqegAD+/+WwNoHYECd4RvL6c2t837zRceeh1XRZSADlTBazuC7NU5o/Z4veJk8FP5hi9EBC89rXxqQgqUUxMc88d6u3GEar1vY8fPIhKq0v043ua8RC1FAfz+0cEl9vcRJ3Rtj//Vc0YonaVgKNlP7cn/7/uvKDBw97Pgsi1Yxftf+T+1jfD+f/lwBptRQn49o/fmi6KrWTjwhPc15/Q9N4YTGPl8crfVTGwAOgcSjpd/CJy99AzNIO+g0ueohdDxTxxl0v1Kebu0hccMViDhiC1f7qzuJ0V3GNbuttx1KZ++05ne+uSfqXtd7qZdSHgC9jaarSm8y28rMNukBwcSya0laP4ZvWT7YFTMmuKvZ+r/MASPGobzOUw+jbuz+ZqOH/e35wndboy96nqcWrf1/pJcWThP2DflW/XNjj+KDXco9cayko3mrKwBDH5Kdgs/eI6U61DMeuembD//H6c0JFQTBOpHRg03Dy2VYnmB3y7dDLR0XdHs2H/B99FZ4zu6cLrFkQJp5e0XzHf+jB/mQ88JufsrxLzdcl0D4+g6gIFn0qCy83+MJZvhOO2rczwSIPct+ofX6AZ81sQdnXxzRTLQ5QllsRG6MwPXG3GRvJbaSU4pIkXD5E6rQNdyxlElvwflb2fy6Q/A/u9D/m2cWc4I1IHf/oqpwEj1Np1Fof3XdmMuotX8Fk2JEW7WYQzlRfwoWirbQrhztJ/2CGSYj8shIbRsX9b1cXM+w7wDZfF5/gkWl5Ug5fgJ6q0/FnKPYOVeS+mn80QMTSYFa74IxQ2XjwzbcmP1lbrBxrJI6PKFDq4upIB6YHHe89fM9zTIouCSI9iCzg+Ao/4hXzvNm5dTdasi4g7N7tAV/bGB0z0Tc0iPPghikr2cWjxr+ZUpVZcDVYyu6/gTT9/gwUrqdK/GVSwby9ORZFP/7Y5oQlRavWETpydPR37yQ6DLRYOSuNUD3MHyTvF9gym+KXYt2YfzSysgjlvEHlQz0LeMqd3JtBY5wNrACQwcyYAAAA');
        // }
        // @include mobile {
        //   background-image: url('data:image/webp;base64,UklGRgoDAABXRUJQVlA4IP4CAABQEACdASoeAB4APjESh0KiIQ39VgAQAYJbACdMoPHc4BbDOBBgNsB5gPOg9AG8AbyBZgmwL6f4A96Du17GZQH8n+Q/oB0oHh8+xThCeQfyT+0flH5qRcHhY/1/pU/6X3Ae2X6M9gn9T/9P0s3suBz4vDwgf8gJOszwfzSSbK3Io4DMEFLYrrIkxPWQAP7/lVxh7Jq2WLomFbLWev4VibfKdQu28207wov4XsWYLewcVar7tOinzSdhd4oRa0oSGh5xmU8zx5ZJCWqegLmcPhkqADW9De5y94XUYXjv0RjlHM+yDz43GViVrFLhm4RjCW3iprEDhV/9Rt85M/r/zqCg5KHX8uq3YQyWWbGC//Mxv+//nVL4I28Cha/H+J0bK/i3rsJleIRZv/7i531HhpzlyF/ZF5eJ4P1kq9k5aqzPOx83fZ4PRzB7+O9hNUT8Slvyg9vQRWdPPpKVJUAjZ1uxJ8GlopzY/3MxK3M/dJ2SrhH100ZsURn/twbimOH6aFHy+Y6+dP5JjyX19PVH6bhoeP3H/3zCzMLzbhCEWXZzufgz8C39Gv4lwD9PRqJ1OHM3uJD1Heykua62mebeXIvAQ+bRdY7LAPzyNtotwzK9wAt1tl/EWxr4+nfiEKKW535sXVDMYbwj9TlpGv0al3OLE/aTdTSwkyZun78F6nDB9R/l/pSryIxQdDzttVD3eUXXePhQowlNnMJy65tSbraqgrtXYc5+rc7/6ObqHjApHOpv73Gkq+6JUpds2SEWnQxNoZvLB7oa74NS+EskXuxfiVC7tHBTifddNTb1+YZVpe/z/uVmCjpK/xI3wSjroVRRP52Xac1UgbnWe3W2Hv07nk1wbVyfU+/qXdFxKOJBj0/iGzKHRfYv2TCnSc3wWjcireO7u/zZPp3uVA5l5PfYZtt5OImMCX/BkB3GMsiPrUdge6v7GxkOzMBaoUmWSP+cx8La8JyC39xGUEeSEIigoblldh/+kzyngTyzLsyE6/iB8aP1NYr9YKmgAAAA');
        // }
      }
      .high-res {
        @include desktop-and-up {
          background-image: url('#{$cdn}/images/france/hero-1-desktop@1200x320.webp');
          @include retina {
            background-image: url('#{$cdn}/images/france/hero-1-desktop@2400x640.webp');
          }
        }
        // @include tablet {
        //   background-image: url('#{#{$cdn}}/images/public/hero-1/hero-1-tablet@900x440.webp');
        // }
        // @include mobile {
        //   background-image: url('#{#{$cdn}}/images/public/hero-1/hero-1-mobile@600x600.webp');
        // }
      }
    }

    &.screwdriver {
      .preload {
        @include desktop-and-up {
          background-image: url('data:image/webp;base64,UklGRgIDAABXRUJQVlA4IPYCAACwDwCdASo8ABAAPi0ShkKhoQ3+qgAMAWJbACdMoR7WLjybDAbYDcMbxv6AHSe2YJmT4A9+bwD6wZLv69+Tuij/vH405Z98/+4DWG/xXfAedr/lem5mn+X/+z7gv8t/rH+u693oNftUmns8EtZDcUBpl+H+++JzVFZpwFyrupkWicCeJWfzUAD+8oKRs/jua9rJR32A+S9z7IsGO58m2VLMje/AxBcyuyn6YoBTnDJYQDBwbKa35vmthPj4qUQmcsMnnbJo+MbA7UuoF3WYG+we+GQEB17KUGcgsqcrquW3iAKqGeBMtESUwxmp85Z+sMtQ7Pjd20ycn+ZvlpovG8jvy1+//3xZW4/7H6sfue7DhkX9dj/kkrOo/+RvFoElC13rAH62v2Z3KcCQ4yNQS4yXnStVOr4j7qHQpaq8JK5rJ8nKhT+jNR2ssDt5mHUA5a9seeP+JfEHHrzEWjlN+sehC5/HwPUCl94j2dbinQKKCzL3+l3w+nJcdDcUOa15CrV1mNBKNb/MXv+VHmpEqijzSVz9OW+9lHSqlZqN+eF/GjrfQf35esq75c0tEfr9xYUtf/loLf9SmbgiTnD6F27vtHdmnT6CIzpeMrF2l3rv3Hgv1cSLuz8L4Dr613TK3TcTUDDtYwzLgjv49rbU8su6v+e5D8+OGConZaravv4GfgV/iLUHKnWTVBnohuiIFYJbsEUjfgJLvZe9KvkSaziPuK5LF89c3smuaRfTXKCnZU6LmZ4H7WHjXiVbuagOJVFLKMPM5g8yYfxCudnmJaFz8/5w35r7Ws7WC1IgOTl6Y3T7+GSovI0V5EENa1Bv/KuJLdYOX1/rR6PKL6bceN9D/F1QeyknfMA+AhLPv/5U8G56RP4RxWKGj4UnUvBcO5HpzJ9/+q+XbOIN0REgoGZ4TCFyz6ZTYMc+X8Y5aI7bbhxnkIsnK7MEl0e3uDisb21ZuO7/tJz12P/InJN2BC3X+Uc3oN093844kDTWfhhnM/KhFyAAAA==');
        }
        // @include tablet {
        //   background-image: url('data:image/webp;base64,UklGRggDAABXRUJQVlA4IPwCAACwDgCdASotABYAPjEWiUMiISEStZggAwSzAE6ZQjnb0TzBKK/T8Ub6EJye2A5of9gPcBvGf7AewB+qvWcf4atgdFGAGsrdBFxtID6iaebzh+gZm+VCvLA9g3oABZl5XQM4k1v6QcTW13dcPfkSflA32DYQs1fbPComJ+mv/u4A/v0Yr5mS1pluK9keNbIOLg2ut4qzi35XQyKR2mUoivtDP3Ic2V8bbPJNtksIztKrWKxxfcGogh3A/CaEAGHJ+Zo2RJkDrRELu1ndlTVeoadoxqEdYRTw8Ld7s/nXgIXH7J0kOLO/rjtuenpi03uv1YDnaLSY8ipvn+YyjRQPbjl/EFNHJMABM2P33PmhGB2RHI9WvMqo7Vwbf5YhdlfuPwXxiR5YSEDAhJZ4rhXQtXGurkQALBb1XlL6yMfKLCc4TRHjqqr5UFbhg9gwKxCW2W+dAOTTr9ujJIQHqtjYUkY0q/uOxg9HE0QJMWXE9/qwgdbSPIj67y+9RLmD26w1gYcS7tOfi1JhCV3ELd6Hlgc9xYKqJ5hUQe1GtI6Z+cBmYTPu3NQIW6vtnYjDB8/azzEI65m+PAKl8+pI7zY69bUUC1YlPh1zwl/0jnRl3ONAYsfAhRtZMNTzparpCX/xTdfdbQiwdoEfb1lcmd/ShM/eKviUufGWo7XvTO2GbyLf+zzARYpR63ZU8VxjiaoyLsaKeUH24Lp26ilYQrjCjvqLP0eYp2LTiHLXvtjEfKUa907jsOvP2Cj4sqGt5+pWOwmG8f+6oeHf6SPDJ97tMUw0xV6046y70crj1h0CTz/Z7eQUpaBYcts++7JU6xrvMJW8CpyHWmeLuef9BZzq/4v/uels3elpEKlF08q+sCsKkEzgAhJjcwH8qYJGgtohbxYUaOqQKoYaNw1fZEep+FvNdPTZdd5T5mbqaVMRCKW390OU8gsvfmsQKTTI+1Sbw+TX+dTxaD29NUr8oJVHDsZTpvypqKDEkjUORrYqd+1a/jy0uzxQp7MV48AAAA==');
        // }
        // @include mobile {
        //   background-image: url('data:image/webp;base64,UklGRnACAABXRUJQVlA4IGQCAACQDACdASoeAB4APjESiEKiISEYDAYAIAMEswBOmUI4G9d4qpw3gQY/bAbgDeE/QA6T37ZrcEaRZ0fgMgLfBlRMAPqj5O3HsRk+gBne1Bejx+uRXbQjuOG/Iffn4FcHqjRl+hlBqxpBKM6uFBXQAP7/D2PkytoiVru920tc8+4HuYaVWGDBXsiR/0nZ+wHV6+4lrDPK6hLXfYpPWbMsAzy8ReHwm+ZhDt983TcdJdS69FOq/9LE22N+ES+fIzzMA/85kBDFnOt6i6CuT+PynSop9Neh+ME87R0aVZeCbIIZFhWs/xgZtkheYjN+CUZFgmRNIPN1M33MeunnCR81hOOqampIvnLeRoU42lmSQwrt0LKIsdiqWZrNHOxro/rXJ7VgD/uzcmjbA6vQ4BU4nwPmZO/s0FSO8boAifQ9nL6CfF8zXza6SCTfmXY76CqWQLB042wrcjchNms9XamxkSYaDJVd9cvDeQRLXt7WXIXbZ0dwFsU/V0R7nv+fXV8brc0aqXjeb0DJh3/MGr5H73oxJVt4bJ4ThcEkt9LwaUM5WOrg45LsX8DvfJqPfYNVw9HNT7KF9eYkuPv6WO0VJT5zYHT+Ye1RMOldPoQsVjEERJraD9+VSoMLZ/yg7TRbk5TsgvsBWhWUNqi3P/DENMcGN6Y50GPcHyHKQ83IFD4wxbKxvTprtP1dd6vp+rvT0zrT/3G6+TunDpYvllzntoN0fqotfWxnqrLA8xj/1qRwmfGvPaykCNTfK+V8jIa1Cn/k9TfoQsvz/pyz4T9vjE0+++Xk8LTCrVunUg2Dr8S65gKgAAA=');
        // }
      }
      .high-res {
        @include desktop-and-up {
          background-image: url('#{$cdn}/images/france/hero-2-desktop@1200x320.webp');
          @include retina {
            background-image: url('#{$cdn}/images/france/hero-2-desktop@2400x640.webp');
          }
        }
        // @include tablet {
        //   background-image: url('#{#{$cdn}}/images/public/hero-2/hero-2-tablet@900x440.webp');
        // }
        // @include mobile {
        //   background-image: url('#{#{$cdn}}/images/public/hero-2/hero-2-mobile@600x600.webp');
        // }
      }
    }

    &.processor {
      .preload {
        @include desktop-and-up {
          background-image: url('data:image/webp;base64,UklGRpoBAABXRUJQVlA4II4BAAAwCACdASo8ABAAPjEUiEKiISEUBqggAwSzgDsAfgAWYCfBDNPG/qAdGP0M/2APjBfuWQ0QDQFvYEfGMtNuN4jivlN5d+BsyPnHcAD+/1eda+jyXUHqNMQPxMFHb9M2U5fyN6NVbSeFsBOsYO1I3tO9amyThAEWrvwC1+8n74P7szHTu+R5fNa57Mla82itjFUBqw29RkWqXlrQP4cAq///yz5/DZ1Of//ILlhdcjQy0qAVLsfFt2WW84ZezPAcL3Lq3R1ZPs88wU8+GiVwVKMePPB3d7lggFP1aEcWyEXCNsRjU+d1KhdYL716ouDWHSB842JQ/LS33ho/9ptIOw8XvfoJ9wdhUMO/gdb9dLRr7L8ITfdjor58njXWaOCaMlfBG0xzb1feAJATdFm4A/7fZ9Jk4MEn8Gs1L0DHEFOTzotVWus+VaW89uDOGbRoxsAin9gwO6gTFYjNMsXyiTLqrjN/nD3vBie8dnWqFdPA0I2aMHUVBZFb6j3TV31L1rgUcacA6YNy+Fg1EAAAAA==');
        }
        // @include tablet {
        //   background-image: url('data:image/webp;base64,UklGRggDAABXRUJQVlA4IPwCAACwDgCdASotABYAPjEWiUMiISEStZggAwSzAE6ZQjnb0TzBKK/T8Ub6EJye2A5of9gPcBvGf7AewB+qvWcf4atgdFGAGsrdBFxtID6iaebzh+gZm+VCvLA9g3oABZl5XQM4k1v6QcTW13dcPfkSflA32DYQs1fbPComJ+mv/u4A/v0Yr5mS1pluK9keNbIOLg2ut4qzi35XQyKR2mUoivtDP3Ic2V8bbPJNtksIztKrWKxxfcGogh3A/CaEAGHJ+Zo2RJkDrRELu1ndlTVeoadoxqEdYRTw8Ld7s/nXgIXH7J0kOLO/rjtuenpi03uv1YDnaLSY8ipvn+YyjRQPbjl/EFNHJMABM2P33PmhGB2RHI9WvMqo7Vwbf5YhdlfuPwXxiR5YSEDAhJZ4rhXQtXGurkQALBb1XlL6yMfKLCc4TRHjqqr5UFbhg9gwKxCW2W+dAOTTr9ujJIQHqtjYUkY0q/uOxg9HE0QJMWXE9/qwgdbSPIj67y+9RLmD26w1gYcS7tOfi1JhCV3ELd6Hlgc9xYKqJ5hUQe1GtI6Z+cBmYTPu3NQIW6vtnYjDB8/azzEI65m+PAKl8+pI7zY69bUUC1YlPh1zwl/0jnRl3ONAYsfAhRtZMNTzparpCX/xTdfdbQiwdoEfb1lcmd/ShM/eKviUufGWo7XvTO2GbyLf+zzARYpR63ZU8VxjiaoyLsaKeUH24Lp26ilYQrjCjvqLP0eYp2LTiHLXvtjEfKUa907jsOvP2Cj4sqGt5+pWOwmG8f+6oeHf6SPDJ97tMUw0xV6046y70crj1h0CTz/Z7eQUpaBYcts++7JU6xrvMJW8CpyHWmeLuef9BZzq/4v/uels3elpEKlF08q+sCsKkEzgAhJjcwH8qYJGgtohbxYUaOqQKoYaNw1fZEep+FvNdPTZdd5T5mbqaVMRCKW390OU8gsvfmsQKTTI+1Sbw+TX+dTxaD29NUr8oJVHDsZTpvypqKDEkjUORrYqd+1a/jy0uzxQp7MV48AAAA==');
        // }
        // @include mobile {
        //   background-image: url('data:image/webp;base64,UklGRnACAABXRUJQVlA4IGQCAACQDACdASoeAB4APjESiEKiISEYDAYAIAMEswBOmUI4G9d4qpw3gQY/bAbgDeE/QA6T37ZrcEaRZ0fgMgLfBlRMAPqj5O3HsRk+gBne1Bejx+uRXbQjuOG/Iffn4FcHqjRl+hlBqxpBKM6uFBXQAP7/D2PkytoiVru920tc8+4HuYaVWGDBXsiR/0nZ+wHV6+4lrDPK6hLXfYpPWbMsAzy8ReHwm+ZhDt983TcdJdS69FOq/9LE22N+ES+fIzzMA/85kBDFnOt6i6CuT+PynSop9Neh+ME87R0aVZeCbIIZFhWs/xgZtkheYjN+CUZFgmRNIPN1M33MeunnCR81hOOqampIvnLeRoU42lmSQwrt0LKIsdiqWZrNHOxro/rXJ7VgD/uzcmjbA6vQ4BU4nwPmZO/s0FSO8boAifQ9nL6CfF8zXza6SCTfmXY76CqWQLB042wrcjchNms9XamxkSYaDJVd9cvDeQRLXt7WXIXbZ0dwFsU/V0R7nv+fXV8brc0aqXjeb0DJh3/MGr5H73oxJVt4bJ4ThcEkt9LwaUM5WOrg45LsX8DvfJqPfYNVw9HNT7KF9eYkuPv6WO0VJT5zYHT+Ye1RMOldPoQsVjEERJraD9+VSoMLZ/yg7TRbk5TsgvsBWhWUNqi3P/DENMcGN6Y50GPcHyHKQ83IFD4wxbKxvTprtP1dd6vp+rvT0zrT/3G6+TunDpYvllzntoN0fqotfWxnqrLA8xj/1qRwmfGvPaykCNTfK+V8jIa1Cn/k9TfoQsvz/pyz4T9vjE0+++Xk8LTCrVunUg2Dr8S65gKgAAA=');
        // }
      }
      .high-res {
        @include desktop-and-up {
          background-image: url('#{$cdn}/images/france/hero-3-desktop@1200x320.webp');
          @include retina {
            background-image: url('#{$cdn}/images/france/hero-3-desktop@2400x640.webp');
          }
        }
        // @include tablet {
        //   background-image: url('#{#{$cdn}}/images/public/hero-2/hero-2-tablet@900x440.webp');
        // }
        // @include mobile {
        //   background-image: url('#{#{$cdn}}/images/public/hero-2/hero-2-mobile@600x600.webp');
        // }
      }
    }
    .preload {
      filter: blur(5vw);
    }
    .liner {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
      @include widescreen {
        padding-top: 80px;
      }
      @include desktop {
        padding-top: vw(80px);
      }
    }
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      .preload,
      .high-res {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% auto;
      }
    }
    h1 {
      position: relative;
      z-index: 1;
      font-family: var(--extra-bold);
      color: white;
      line-height: 160%;
      max-width: 400px;
      text-align: center;
      @include widescreen {
        font-size: 30px;
      }
      @include desktop {
        font-size: vw(30px);
      }
      @include tablet {
        font-size: vw-tablet(30px);
      }
      @include mobile {
        font-size: vw-mobile(30px);
      }
      :global {
        nobr {
          display: inline-block;
        }
        img {
          display: inline-block;
          transform: translateY(2px);
        }
        .word {
          position: relative;
          &:after {
            content: '';
            position: absolute;
            background: var(--blue-4);
            z-index: -1;
            @include widescreen {
              height: calc(100% + 4px);
              width: calc(100% + 20px);
              left: -10px;
              top: -2px;
            }
            @include desktop {
              height: calc(100% + #{vw(4px)});
              width: calc(100% + #{vw(20px)});
              left: vw(-10px);
              top: vw(-2px);
            }
            @include tablet {
              height: calc(100% + 0.4vw);
              width: calc(100% + 3.2vw);
              left: -1.6vw;
              top: -0.2vw;
            }
            @include mobile {
              height: calc(100% + 0.8vw);
              width: calc(100% + 6vw);
              left: -3vw;
              top: -0.4vw;
            }
          }
        }
      }
    }
  }
</style>

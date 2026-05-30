<script lang="ts">
  import Flag from '$lib/components/Flag.svelte';
  import Line from '$lib/components/Line.svelte';
  import { page } from '$app/state';
  import { spanEachWord } from '$lib/helpers/spanEachWord';

  interface Props {
    h1: string;
    theme: 'one' | 'two' | 'three' | 'none';
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

    &.one {
      .preload {
        @include desktop-and-up {
          background-image: url('data:image/webp;base64,UklGRo4CAABXRUJQVlA4IIICAADQDACdASo8ABAAPjESh0KiIQwDABABglsAJ0yhHO3qvEB6fdq8kDgAfcBvgOek5wDrAPQA8tH2UP3IoQXD76XjBcZ0BP+4wQHJ9Z13pf2COkP5IA+7qQwIcI7qHZpwVpHnRi8X8ROagrzdmxpkT1AA/vot7AJ1t82R3UX+mdcwabPrMwV0Y9LckJX0sf3IVzeNhiw/E7Au5EN6tezt1M8mFMCaTaHh3iNn+lJzf+KPasxQ4706qax6f7dgWXg0A3Qw/7//5ZaDEXfl48cmDk9lk858N4t/wM/sB9hC2UqSQ5u1Dr5smwcd6GSwbfXTFNHeXFVMryv1zszu13y+VhxXmZBDkLrhgNQDzcGMtTLQBgiqYo04fNxU4itszEPqv/Mx5z9halObkkA4dEID/OT7ZY1bsUbySD8gLv491/ItGk2c5nn/4Rztm0yWyP9XsUc6zro16rkDv+15MyjPWAxSB+cXgcFmh/JdAXsLOO0Hyh2p08Hr7A26e1lDbij4XN/SR+NAdR4FTR9Z4chUZvHCDqadZCF4K6XGvbyZKCQNHy6y896l0tiiWZfdvAYEPN7h2sa4JPkg7mCF2D5AU/pjoJlOkjgcGuFbhQ1xBARoXzWvKnKqP7FJfR/z+3lLtu7vin2D7PtrxAossAuRsb4ki61cTc62nqrrze/T/l/QcUmE+//n9dKYVLUfzu/Ay0cFP9as1Jrb9Gc/whadkDe9VrISRos2bSmjuuxzoNlOk9+E7n6KkHXDjFW2hpQdBuq9MemLE4Xq1j2k9RPx1PgWPQUbzOa98MbzizwKe/hPXjegnBkk1Xgl0CVZWJrA8cmFLYbhq2Bc2IO656fLrUPIAAA=');
        }
        @include tablet {
          background-image: url('data:image/webp;base64,UklGRiADAABXRUJQVlA4IBQDAAAQEQCdASotABYAPjEWiUKiISEVVQAgAwS2AE6ZQj1b0/zBKb/KPwZtCJAuuOcB5U/QA8wHmyf5L1LeSr1t36AewB+1XphezL5QFYa5H/M/srlC/wnkBuJf8BvBNIPEy+laIbkJ2fV6j/6fqzCL3O7kNHcO44B9bxA8BiuTeDc4qol51NxNOPr+7iylKoGiZBmAAP78JCWaENv97U34oQya7QQ6jd9D2bhBqmiZyLM0c3exDHr/v83s3FId5L17+XCH34rf5MkFbTkoDLF6+0pcbXAvJ1/MXSeAz0hAq/Q09Xpt/A5H4Z4y4ZfWFFo3fwU1/Dfh/a/6xg/RPvMy3xnX+MC/zs/HBCedkHjo/Ux9+3vrokmbRReZLIPmxy4UKtkqeZx3/RALMMmgYrsFiSHBrFwshs0VSL9VStJS1TSzHryNFgJ+/v7IVZOe7gFvBoSlQnfU2aTKVX3Kn6adliFZvnAdY1tD8+TuqCyPJbUW4588ydYyqqu3CRg3NJjrEv0GQamhgrU8V5d46OQw5LbgMIg4P1xFJRPIJbqBasPbE/Tshnftr3g193d+5oqq3T77lY+7Lr18EWSQHDXZaCev14qNJNgZc3DBdI2ILoq7NP/HxZ9oDBYgbs5XssyhGJaBCTZ9b25Se88ZRNmV5GDp5iM5Vw8UOb9reYmQYwSA8Fjwj/TZR+p2O665E8Z5csvOrB2wrRR/0o/+JuhFkjd++WT+vf1/TdowxsSA7Kv+mLsV2v+Xvjby37wQhrmn//UfTw/l32jy3yRLggRoYqPcqTw/6qc81WY2ZLatvddpKBB5Rc8N0ZleFgYB+gq15/8L5VdPOHE6PQT3WcmjJiHlOxjjaF93hRp0DFiRxcXA2ZC9EnJ4EMQrty/daNmY2AaesZbdddDuXPjNrP1M/1A6Otrvv+wYM8X8udD+uujV3GxJXGtLfFeEfeZ4P/MU0Y1/o7PGQY28OWz2b0X6lE60lqUSQ9afB5jicnVePhBAAgS3bKaDyJtdPQJXvJT/sq3AjMCwFTSXFTgP8VcXAa9n7hBQAA==');
        }
        @include mobile {
          background-image: url('data:image/webp;base64,UklGRsICAABXRUJQVlA4ILYCAADwDwCdASoeAB4APjESiEKiISEYDAYAIAMEtgBOmUI4G8v4QzS/vBkgcADbJ+YDcwOog3lSzBNuP1XwB8NfoKMG0oX7bQFhy3rLjP89/z/GB3Bf2q60r6ov975U/or/le4L+tnVx9DkOxz+lD96A8JSd/rFS8XXOTZcKyTGxobf2LE5kGO+dyoAAP73LFUJDhtK4dM84x8d+bGr3wbSWqVNaoTUYoKeF299liNTipbNFrrU5Az985f4BrSRuYf/1Vu5MYtCeUCJ5uKDtMW7bgBJxOOAuFOr8xYCuNMGY+rv+WDRZLohUd04rKOInECfIAgbEDT/23w9wrQss7ucm/sjn6Cdg0osb1DJlU6nuytVaDAf+wb6Tw7bmQ3B5uKtyljl0iwf8D8pILcRno/Y/L0tmyU5u+ZZMCQvk9BWP0pijbRh6vDbDpLoYYJpzlM56cmVKuKiGG/nM4nMuADtQu8wDpp1qvd7pvj6kiy9lG/VDv4MMT3nozPu3t9+uToF5eHonWjXitJmZCcaj+RMlNXpM3wZXC+q96Kt2ifv0Ovfr8G+OnAdx0jO/Btp57ZzYeN3TUzaIRctREzsZBK/Yz0v/qP7tP/5sEuj/v/nkr/ZDP526Hak2t+SN4LHl2//y9P3x0DEH4qySXXBgb/JsbRKU4wMzI7KIKPcH2bcbvzzR2g0XVE1uB/GpV8imO8VHyUKBdNNJJ9Kl+k/f8/+fDf9xVEhqxjvtGvfSM3tPsymVfGBZGz8y3DogV09dgndQ+KzvziGImuas7giCq3YpqCs5A5v8hHwKY+wPJ+U8cGWf9vexqGAsPElu3wXPALYuV1gjagwN2JYga7MlYWiqrVaMFGFw7mOiFfRc7AyfWcUNbi/r/rgGY5ijmHg3Uw3yG7Vx5cewifdNgsjVJ3/zp2FEoIhAAAA');
        }
      }
      .high-res {
        @include desktop-and-up {
          background-image: url('#{$cdn}/images/france/hero-1-desktop@1200x320.webp');
          @include retina {
            background-image: url('#{$cdn}/images/france/hero-1-desktop@2400x640.webp');
          }
        }
        @include tablet {
          background-image: url('#{$cdn}/images/france/hero-1-tablet@900x420.webp');
        }
        @include mobile {
          background-image: url('#{$cdn}/images/france/hero-1-mobile@600x600.webp');
        }
      }
    }

    &.two {
      .preload {
        @include desktop-and-up {
          background-image: url('data:image/webp;base64,UklGRgIDAABXRUJQVlA4IPYCAACwDwCdASo8ABAAPi0ShkKhoQ3+qgAMAWJbACdMoR7WLjybDAbYDcMbxv6AHSe2YJmT4A9+bwD6wZLv69+Tuij/vH405Z98/+4DWG/xXfAedr/lem5mn+X/+z7gv8t/rH+u693oNftUmns8EtZDcUBpl+H+++JzVFZpwFyrupkWicCeJWfzUAD+8oKRs/jua9rJR32A+S9z7IsGO58m2VLMje/AxBcyuyn6YoBTnDJYQDBwbKa35vmthPj4qUQmcsMnnbJo+MbA7UuoF3WYG+we+GQEB17KUGcgsqcrquW3iAKqGeBMtESUwxmp85Z+sMtQ7Pjd20ycn+ZvlpovG8jvy1+//3xZW4/7H6sfue7DhkX9dj/kkrOo/+RvFoElC13rAH62v2Z3KcCQ4yNQS4yXnStVOr4j7qHQpaq8JK5rJ8nKhT+jNR2ssDt5mHUA5a9seeP+JfEHHrzEWjlN+sehC5/HwPUCl94j2dbinQKKCzL3+l3w+nJcdDcUOa15CrV1mNBKNb/MXv+VHmpEqijzSVz9OW+9lHSqlZqN+eF/GjrfQf35esq75c0tEfr9xYUtf/loLf9SmbgiTnD6F27vtHdmnT6CIzpeMrF2l3rv3Hgv1cSLuz8L4Dr613TK3TcTUDDtYwzLgjv49rbU8su6v+e5D8+OGConZaravv4GfgV/iLUHKnWTVBnohuiIFYJbsEUjfgJLvZe9KvkSaziPuK5LF89c3smuaRfTXKCnZU6LmZ4H7WHjXiVbuagOJVFLKMPM5g8yYfxCudnmJaFz8/5w35r7Ws7WC1IgOTl6Y3T7+GSovI0V5EENa1Bv/KuJLdYOX1/rR6PKL6bceN9D/F1QeyknfMA+AhLPv/5U8G56RP4RxWKGj4UnUvBcO5HpzJ9/+q+XbOIN0REgoGZ4TCFyz6ZTYMc+X8Y5aI7bbhxnkIsnK7MEl0e3uDisb21ZuO7/tJz12P/InJN2BC3X+Uc3oN093844kDTWfhhnM/KhFyAAAA==');
        }
        @include tablet {
          background-image: url('data:image/webp;base64,UklGRhQEAABXRUJQVlA4WAoAAAAQAAAALAAAFQAAQUxQSBgAAAABD/D+/4iIoKZtA6ZMyh/lvPtH9D814hxWUDgg1gMAAFAUAJ0BKi0AFgA+MRSJQqIhIRVVACADBLMATplCPa9qvOlOHWl8izlz5Ve0B+Gt4B5gOgB5MHWU+gB0m37X+k5c4/BHv9+PfaLJgfV/y18zO7j7n967+8cYH1A/wHoMf2H8udkc/nH+o+1X4qc1n0B/vPcJ/l39T/4/XV9ET9dBTaLH57QhkRkuFUF+OH3T6TUrevjWTQwB+i68zi9Yi2Ld3V+F8SWw2wZjAAD+agqvdB/6Vlk46+TzGleV6qtAqif5AnkyFqpUrLS+MW+1Jhty8/3FW5yQrafNIs2WuC+q4Tt06UK5VtfJPfh9u80scEhq+HMDEkOUgzxRfCoyljYof0cWHzviDWNT8MNTmAm647QyKlYKyqlJ4/tzKRA5Qsiygmm9pSc3JIH+/lrez+ogCnCAoYV1/znL0kqd/lg6DOC/tv/XYxiI63/yTQzwWxRPHdlc8mkPhe3Kb7WtkMZ3WJBrlUxzv0sWE+6yojPUAkJncDzIYE7yWEgHvydVmbr4a/Elx6Av/dvg4D2nH+jdtPOocZiiFWK1/XqP8mFgeZ4BWwLOFGj/k6qLCLdVfoB5Te9PY0UaMnmI3Ff08P76/4MaRKdKTw9xItMXFVjEbaHrio4zANqFWZ2JR9XjuFUazGsvoVPoKOFZ7iMKNKwbWfOqCenXncAmI2NmvyhM7B7oNB2ZBXaWYrmoA83h7cxhj0E7gBEbylcogk//RrWkDUlcouaPi/VwoTBw42CAn1cfrxnKmqTA+9ZWmwr157phC/vpQied2rKptmUKnvrtUfacPLFPZoq4Gl/nMXkbSv7iL08EfqtkZaMP4Ml9enOr+hL9LsZ64Rd+QUPC11rqJyeaIKDsShG3ValIqWaFfof1rcoU3NQn2Kl53ZdoVxSu/8FP7Q7k9xzq5sIHNiOzTJzuKYUMcPcfpIjRZYpSdSW/1eXSAlzA187sPmE6HXozIomIcPGhLZkOAK/4Rl0qN2YqT/rlJtX+jmRaj1LfmdyXOcTtArxcU6Pe1vwWdeJZ+f/Afu/62/xMfrMMBgTvTy1wL/hp/3pB4zk/D81eT3WUUYSC5La1fy2a/6olgCNyASvcSAbif3yqTeDOOthzeeSsayWLtvDzxr42MftbI4GUZWoFQIfk9hCmiW8Swv1AVkfl8ZHMUgQcbuS4pjV0C1X3WbDuBQqSUezHARfrqu6EWzPdWPOTosxPnAd8CP3npfFTeMF+CfxyZdx6yMw0kmuizQouPDxvaaxBUWmkbVavCk/VwE9Rs2AJQ9rZRHsOYfOEez8lmpOTPBDeBCPWuxwAAAA=');
        }
        @include mobile {
          background-image: url('data:image/webp;base64,UklGRioDAABXRUJQVlA4IB4DAACQDwCdASoeAB4APjESh0KiIQwCABABglsAJ0yhHUHrtNHwFtsBuE945/Y7gMrME2d/KPAHu+97PYjJzPfflm0wn5D8ATxL+Zf3zvrcHfma6dP/cemzmvecf+f7gv8t/rf+84CX9jhflPa1ZcMmBt9HhRLOvbUkQMlGXWQPoXOzR8IC+HDgAP70v02RoOLD60lAZv4m658uYup8LMT/lX+8sK3bJpbnAyUfThWv6OyrxPx3p6u8hZSCBnB7JcMmfy2AVLz6gY5sjHNrQcvALd8a3Jqn2VjEa/6GLN11qblAynSlEC+APOKo1/czSO+Nc6LB6rpZlCIt5CagOJ7KY5A97xyfkcDBc5kmaT+IfUN6+SZj/gT8/2hegkZljO4esZNabLYCP7ezvP6BtuqTnL52ldZYhuD0RjC+csit087dnstr/9PeCoFQSo0//6im9hBH/vNP6RMn5/J6qVNH1zyzAa3hEzIUeRcjise0X8rZY2s+alLM2PA8zeskiaknlAGxK8j+D8yTNSmvMDTiIEuMAbrGlmVvfBralAvb6+LxseMlsn2F0dT8dRW0H3e5x4tZSrUO+4+wS0Q8h4153uCtRBxfrncitVwCVePPJk//DEexiEEvgs7mpDmpwmTI2ya7xdxPZhqq/mM+3pZfwvSbxSLryzf+be4Rl4vW2GWkc8Cgf80SN8fJ21F784uB/eknPzz8GvrF+Z+AzKGv6uE8x9IDE5XFY5/44V/HQdpaX5D/3Yx2gJtkdb/hORk7Zica5+o+EuyOYYD1I5HUqxY2HPB//T1/+/ZlU6Zi0Yj2f/0ZkXjLYxgeayPMdu171fCkw8hpRElyOlcNEHBWKtjDfH/ONGe+0BjsX8lvAveQYhgCdxARCvi1a9hVCpsJZnre1atGv+zY3ruJ/h/i6498IJGog+Lp/3UkBSJs4pvHcP9Le5ox//1el82QjzPjkgYKHFz0ef+ZeYCex4hOibbTrNplV/Eou8s8AynPrb/x2/mkrwb/FmVwdjf06vseflQ3mJvHdq+5fnuKn7yhr4vjVE6umIrsq8nBsTUAAAA=');
        }
      }
      .high-res {
        @include desktop-and-up {
          background-image: url('#{$cdn}/images/france/hero-2-desktop@1200x320.webp');
          @include retina {
            background-image: url('#{$cdn}/images/france/hero-2-desktop@2400x640.webp');
          }
        }
        @include tablet {
          background-image: url('#{$cdn}/images/france/hero-2-tablet@2400x640.webp');
        }
        @include mobile {
          background-image: url('#{$cdn}/images/france/hero-2-mobile@600x600.webp');
        }
      }
    }

    &.three {
      .preload {
        @include desktop-and-up {
          background-image: url('data:image/webp;base64,UklGRpoBAABXRUJQVlA4II4BAAAwCACdASo8ABAAPjEUiEKiISEUBqggAwSzgDsAfgAWYCfBDNPG/qAdGP0M/2APjBfuWQ0QDQFvYEfGMtNuN4jivlN5d+BsyPnHcAD+/1eda+jyXUHqNMQPxMFHb9M2U5fyN6NVbSeFsBOsYO1I3tO9amyThAEWrvwC1+8n74P7szHTu+R5fNa57Mla82itjFUBqw29RkWqXlrQP4cAq///yz5/DZ1Of//ILlhdcjQy0qAVLsfFt2WW84ZezPAcL3Lq3R1ZPs88wU8+GiVwVKMePPB3d7lggFP1aEcWyEXCNsRjU+d1KhdYL716ouDWHSB842JQ/LS33ho/9ptIOw8XvfoJ9wdhUMO/gdb9dLRr7L8ITfdjor58njXWaOCaMlfBG0xzb1feAJATdFm4A/7fZ9Jk4MEn8Gs1L0DHEFOTzotVWus+VaW89uDOGbRoxsAin9gwO6gTFYjNMsXyiTLqrjN/nD3vBie8dnWqFdPA0I2aMHUVBZFb6j3TV31L1rgUcacA6YNy+Fg1EAAAAA==');
        }
        @include tablet {
          background-image: url('data:image/webp;base64,UklGRtgBAABXRUJQVlA4IMwBAADQCACdASotABYAPjEWiEMiISEVXAYAIAMEs4Bo10AESCE85SfOo+6ehKE4KcqeJGpPWtUvkQx3Y3aS0RzJYD8G20m8hRnRmBoHRUo2FuWAAP7+bzIvb1lctqkxxG+nEciAIb89nYcGuQW1J3MTY9uI8lkWNq0Vjpxw4O69bRnN7WDEAUWThYd/Wg7un+R7SqJnh2rKi4z7TmjL5bESTrf//EOdDnQ5mM/9zY5xbgWT8TX2F0vyQS4H/l5JB0MEqKZSViJ6miFvWFL9UX0RSFtn47XhT9CxNju7vydpifU0Gjbp3Qh7G09XXPuObLEbb/aDRHuFtQo1OynWJU5Babv3L6e9KAD7+s+gB3LFgJ25Ef3hlvuF6ZLINUK3nyPWeBKtHPb+9ffvwnE6Vymm5ttPjn4cTe3V2Mt3jdU7h+HWb0k+2HPdu5u4WEA/zRgYKH06NC8hThc1XT2qfH126N0K+fB5D0PfIHm126z9sUS6C7J4Mfwka2ZC4f8Sb8eTKQn3qwPJShWyx8QKMVD6l3HzFW9pBvYA+SYrnriq2BTWR/r6XETye6S9elVamPlV5Kx5Hb+0kZpR36Q3U+xJcm2ZXecDHPe6O59lfkAA');
        }
        @include mobile {
          background-image: url('data:image/webp;base64,UklGRrwBAABXRUJQVlA4ILABAAAQCQCdASoeAB4APi0SiEKhoSEYBgAYAsSzgGczQAsAQ9W6DaBWsyytKnNB8Y+oB0kvQl/Ssh7f1HPKXuBAivDN6yfHF+7skhmTRP44aPJCkAAA/v6iBEKOw5Kr1Y5v3qcdOxCOk0GHipBmNf3bMyVeRqDGkta5rZfesc5z+1VWQGcf/bAAkqZrGnd8wT1hjah/THhtd0jLO7PF5TsMAPYM1A0zi6//+N48CvJdlf//Abr4tmRG7uj2YFL5p1taTXqQnCjV9n2wSU6/Mh92WjvCs3twB2PaUG63bWh+z1tWX7ORHGELdTEiKYLPZnKbuPcaKqyqee+BQ/XVrwuAIjc6G5vVXv3/prvLQ22WSsN+F35rBSgoyAmEW2j82iWaRxvv604f1+lZpmgrESL57Vf7mKEAbgjo1GMWWEnq9Cxb/W4swNr4Q9jGayY997Sdh11ZXqmjvn+dv0v/7KzP5yUC+j6T27lsnRHomr4L0UDOAXlZGYDUHmZMiZo0PYeDrhvDhILjmUoCglgYjRsD77AaBFeMA+jrwaTdT2GI0LP4eTYtT411TEch9C54gnCwAAA=');
        }
      }
      .high-res {
        @include desktop-and-up {
          background-image: url('#{$cdn}/images/france/hero-3-desktop@1200x320.webp');
          @include retina {
            background-image: url('#{$cdn}/images/france/hero-3-desktop@2400x640.webp');
          }
        }
        @include tablet {
          background-image: url('#{$cdn}/images/france/hero-3-tablet@900x420.webp');
        }
        @include mobile {
          background-image: url('#{$cdn}/images/france/hero-3-mobile@600x600.webp');
        }
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
        @include tablet {
          background-size: 100vw;
          // TODO
        }
        @include mobile {
          background-size: 100vw auto;
          background-position-y: 18vw;
        }
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

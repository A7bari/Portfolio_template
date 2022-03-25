# Portfolio

## A simple portfolio template

**To view the demo:** [click here](https://ahbari-m.github.io/Portfolio_template/)

![pc](./demo/portfolio.gif)

## mobile vesion 

![mobile](./demo/portfolio-mobile.gif)

## Features

- Modern UI Design + Reveal Animations
- One Page Layout
- Styled with Custom CSS
- Fully Responsive
- Valid HTML5 & CSS3

## How To Use

From your command line :

```
# Clone the repository
$ git clone https://github.com/...

# Move into the repository
$ cd portfolio

# Remove the current origin repository
$ git remote remove origin
```

After that, you can modify the portfolio as you like.

# Template Instructions:


**Go to `/source/index.html` and put your information, there are 5 sections:**

## 0- logo

- in `<header> `tag, add your logo inside `<div id="logo">`

## 1- HOME section

- put your custom portfolio `title`.
- Put your Social Media URL on each href attribute of the `<a>` tags.
- On `<img>` tag, fill the src property with your profile picture path, your picture must be located inside `source/src/img/` folder.

```html
 <!-- **** HOME Section **** -->
  <section id="HOME" class="grid-container bg-gradient" >
    <div class="flow">
      <!-- your title -->
      <h1 class="ff-header fs-700 ">
        HELLO, MY NAME IS <span class="text-sec">JULIA</span>
      </h1>
      <h2 class="fs-600">
        I am <span class="text-sec"> Front-end </span> developer and <span class="text-sec"> UI/UX   </span>Designer
      </h2>
      <div class="flex social-media-icons " style="--gap: 2rem">
        <!-- your social media links -->
        <a href="#"><img src="./img/icon/github-square-brands.svg" alt=""></a>
        <a href="#"><img src="./img/icon/linkedin-brands.svg" alt=""></a>
        <a href="#"> <img src="./img/icon/behance-square-brands.svg" alt=""></a>
      </div>
    </div>

    <!-- your image link -->
    <div class="img-container"  style="align-self: end;" >
      <img src="./img/profile.png" alt="">
    </div>
  </section>
  <!-- ****END HOME Section **** -->
```

## 2- ABOUT section

- On `<img>` tag, fill the src property with your profile picture path, your picture must be located inside `source/src/img/` folder.
- put your `description` on `<p>` tag.
- On last `<a>` tag, include your CV (.pdf) path on href property, your resume CV must be located inside `/source/img/` folder..

```html
<!-- ****about Section **** -->
  <section id="ABOUT" class="bg-white text-dark text-center flow pad-3">
    <h1 class="title">ABOUT ME</h1>
    <div class="grid-container flow">
      <div class="img-container">
        <img  src="./img/pexels-tony-jamesandersson-1674752.jpg" alt="">
      </div>

      <div class=" ff-normal  ">
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad consequatur laudantium optio recusandae mollitia voluptate velit magni autem cupiditate. Aliquid dolorem sit laudantium fuga, autem natus magnam molestias consequuntur, non et accusantium? Quam consequuntur voluptatibus incidunt maiores consectetur harum ab minima, provident commodi distinctio corporis reprehenderit, officia sit deleniti excepturi molestias hic animi eos. Reiciendis facilis at voluptates possimus voluptatem.
        </p>
        <!-- add link to your resume -->
         <a
              rel="noreferrer"
              target="_blank"
              class="btn"
              href="img/resume.pdf"
            >My Resume</a>
      </div>
    </div>
  </section>
  <!-- ****END about Section **** -->

```

## 3- PROJECTS section

- Each project lives inside a `div template` like :
- each project has `title, description and img`
- the image must be located inside `/source/img/` folder..

**Note :** you can add as many projects as you want as long as you respect the template below.  

```html
<div class="grid-container">
      <div class="flow" style="--flow-space:2rem">
      <!-- title -->
        <h1 class="text-accent ff-header">first project title</h1>
        <!-- description -->
        <p class="ff-normal"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem velit cumque dignissimos voluptate, sit ipsum atque totam cum doloribus similique, eos libero, natus vero molestias minima nesciunt laborum excepturi minus fuga debitis veritatis dolore iure asperiores? Non dignissimos neque laboriosam est nulla iusto reiciendis fuga maxime, nisi molestiae beatae error! Sequi consectetur vitae necessitatibus ipsum minus molestias mollitia nisi, eos harum unde cumque! Ducimus maxime dicta nisi minima sequi.
        </p>
      </div>
      <div class="project-img bg-white" >
        <!-- project's img -->
      </div>
    </div>
```

## 4- SERVICES section

- add icon, title and description for your services

**Note :**  you can add as many cards as you want.

```html
<!-- ****sercices Section **** -->
  <section id="SERVICES" class="text-center text-dark bg-white pad-3  " >
    <h1 class="title">SERVICES</h1>

    <div class="cards flex" style="--gap:4rem ;justify-content: center;">

      <div class="cards_item">
        <!-- put here you icon,title and description  -->
        <img src="./img/icon/crop-solid.svg" alt="">
        <h1 class="">first service title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi ipsum cupiditate? In, temporibus dicta quia quae accusantium minus omnis!</p>
      </div>

      <div class="cards_item">
        <!-- put here you icon,title and description  -->
        <div>
          <img src="./img/icon/laptop-solid.svg" alt="">
        </div>
        <h1 class="">sec service title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi ipsum cupiditate? In, temporibus dicta quia quae accusantium minus omnis!</p>
      </div>

      <div class=" cards_item">
        <!-- put here you icon,title and description  -->
        <img src="./img/icon/window-restore-solid.svg" alt="">
        <h1 class="">third service title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi ipsum cupiditate? In, temporibus dicta quia quae accusantium minus omnis!</p>
      </div>
    </div>
  </section>
<!-- ****END sercices Section **** -->

```

## 5- footer

- add content in `<p>` tag.
- Put your Social Media URL on each href attribute of the `<a>` tags.
- You can delete or add as many` <a>` tags your want.


```html 
<footer class="bg-gradient grid-container">

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est repellat at eaque architecto similique numquam cupiditate! <br><br><br>
      &copy; copyright 2022 Mohammed AHBARI</p>
    <div class="social-media-icons flex " style="--gap: 2rem">
      <a href="#"><img src="./img/icon/github-square-brands.svg" alt=""></a>
      <a href="#"><img src="./img/icon/linkedin-brands.svg" alt=""></a>
      <a href="#"> <img src="./img/icon/behance-square-brands.svg" alt=""></a>
    </div>
    
  </div>
</footer>
```

---
layout: home
title: Home
---
<!-- Header Section -->
<header class="landing">
    <div class="overlay">
        <div class="container">
            <h1 class="display-4">Workspace in Buenos Aires</h1>
            <p class="lead">Uninterrupted work, privacy, safety, and comfort for freelancers, students, startups, and remote workers.</p>
            <a href="#register" class="btn btn-primary btn-lg cta-button">Book Your Spot</a>
        </div>
    </div>
</header>

<section>
    <div class="posts">
        <ul class="posts-list">
        {% for post in site.posts %}
            <li class="post-link">
            <a class="post-title" href="{{ site.baseurl }}{{ post.url }}">
                {{ post.title }}
            </a>
            </li>
        {% endfor %}
        {% if site.pages.size > 1 %}
            <hr>
            {% for page in site.pages %}
            {% if page.title != "Home" and page.title != "NotFound"  %}
                {% unless page.url contains "page2" or page.url contains "page3" %}
                <li class="post-link">
                    <a class="post-title" href="{{ site.baseurl }}{{ page.url }}">
                    {{ page.title }} - {{ site.lang }}
                    </a>
                </li>
                {% endunless %}
            {% endif %}
            {% endfor %}
        {% endif %}
        </ul>
    </div>
</section>

<!-- features Section -->
<section id="features" class="py-5">
    <div class="container text-center">
        <h2>Why Choose Our Coworking Space?</h2>
        <p class="lead pb-3">
            Our coworking space in downtown Buenos Aires is designed for those who need a professional environment,  
            enhanced privacy, and easy access to public transportation, just steps from the subway station.
        </p>
        <div class="features-grid">
            <div class="feature-item">
                <h3>Uninterrupted Workspace</h3>
                <p>Work without distractions in a soundproof environment with reliable high-speed internet.</p>
            </div>
            <div class="feature-item">
                <h3>Privacy</h3>
                <p>Private workstations and meeting rooms ensure that your sensitive work stays confidential.</p>
            </div>
            <div class="feature-item">
                <h3>Safety</h3>
                <p>24/7 security and controlled access keep you and your belongings safe at all times.</p>
            </div>
            <div class="feature-item">
                <h3>Comfort</h3>
                <p>Ergonomic furniture and a fully equipped environment ensure your comfort while you work.</p>
            </div>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section id="gallery" class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center">Gallery</h2>
        <div class="row gallery">
            <div class="col-md-4">
                <div class="img-container mb-2">
                    <img src="/assets/gallery/gallery1.jpg" alt="Office Space 1">
                </div>
            </div>
            <div class="col-md-4">
                <div class="img-container mb-2">
                    <img src="/assets/gallery/gallery2.jpg" alt="Office Space 2">
                </div>
            </div>
            <div class="col-md-4">
                <div class="img-container mb-2">
                    <img src="/assets/gallery/gallery3.jpg" alt="Office Space 3">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Registration Section -->
<section id="register" class="py-5">
    <div class="container">
        <h2 class="text-center">Register Now</h2>
        <form id="registerForm" class="col-md-6 mx-auto">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="tel" class="form-control" id="phone" required>
            </div>
            <button type="submit" id="submit-register" class="btn btn-primary w-100">Submit</button>
        </form>
    </div>
</section>

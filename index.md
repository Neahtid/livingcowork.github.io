---
layout: home
title: Home

namespace: root
permalink: /
---
<!-- Header Section -->
<header class="landing">
    <div class="overlay">
        <div class="px-2">
            <div class="row">
                <!-- Lienzo -->
                <div class="col-md-8">
                    <h1 class="display-4">
                    {% t pages.homeh1 %}
                    </h1>
                    <p class="lead">{% t pages.homeh2 %}</p>
                    <a href="#register" class="btn btn-primary btn-lg cta-button">
                    {% t pages.homecta %}
                    </a>
                </div>
                <!-- Sidebar (List of Posts) -->
                <div class="col-md-4">
                    <div class="sidebar">
                        <h5>{% t pages.precents %}</h5>
                        <ul class="list-group">
                        {%- assign posts = site.posts | sort: 'date' | reverse -%}
                        {%- for post in posts -%}
                        <li class="list-group-item">
                            <a href="{{ site.baseurl }}{{ post.url }}">
                            {{ post.title | escape }} 
                            </a>
                            <br>
                            <small class="text-secondary">
                            {%- assign date_format = site.minima.date_format | default: "%a %-d-%b-%Y %I:%M %p" -%}
                            {%- assign mdate = post.date | date_to_xmlschema -%}
                            {% if site.lang == site.default_lang %}
                            {{ post.date |  default: "%a %-d-%b-%YY" | timeago }}
                            {% else %}
                             {{ mdate | date: date_format }}
                            {% endif %}
                            </small>
                        </li>
                        {%- endfor -%}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- features Section -->
<section id="features" class="py-5">
    <div class="container text-center">
        <h2>{% t pages.whyT %}</h2>
        <p class="lead pb-3">
            {% t pages.whyR %}
        </p>
        <div class="features-grid">
            <div class="feature-item">
                <h3>{% t pages.whyT1 %}</h3>
                <p>{% t pages.whyR1 %}</p>
            </div>
            <div class="feature-item">
                <h3>{% t pages.whyT2 %}</h3>
                <p>{% t pages.whyR2 %}</p>
            </div>
            <div class="feature-item">
                <h3>{% t pages.whyT3 %}</h3>
                <p>{% t pages.whyR3 %}.</p>
            </div>
            <div class="feature-item">
                <h3>{% t pages.whyT4 %}</h3>
                <p>{% t pages.whyR4 %}</p>
            </div>
        </div>
    </div>
</section>
<!-- Gallery Section -->
<section id="gallery" class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center">{% t pages.hgallery %}</h2>
        <!-- Carousel Wrapper -->
        <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <!-- Carousel Items (3 images per slide) -->
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery1.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 1">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery2.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 2">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery3.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 3">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery4.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 4">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery5.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 5">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery6.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 6">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery7.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 7">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery8.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 8">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery9.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 9">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery10.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 10">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery11.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 11">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="img-container mb-2">
                                <img src="/assets/gallery/gallery12.jpg" class="d-block w-100 img-thumbnail gallery-img" alt="Office Space 12">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Carousel Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</section>

<!-- Modal for Lightbox -->
<div class="modal fade" id="lightboxModal" tabindex="-1" aria-labelledby="lightboxLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <img id="lightboxImage" src="" class="img-fluid" alt="">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                {% t pages.hclose %}
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Registration Section -->
<section id="register" class="py-5">
    <div class="container">
        <h2 class="text-center">{% t pages.hregitert %}</h2>
        <form id="registerForm" class="col-md-6 mx-auto">
            <div class="mb-3">
                <label for="name" class="form-label">{% t pages.hregisterfn %}</label>
                <input type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">{% t pages.hregisterfe %}</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">{% t pages.hregisterfp %}</label>
                <input type="tel" class="form-control" id="phone" required>
            </div>
            <button type="submit" id="submit-register" class="btn btn-primary w-100">{% t pages.hregisterfsub %}</button>
        </form>
    </div>
</section>

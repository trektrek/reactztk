import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from WordPress
        axios.get('https://zerotrack.com.br/pb/wp-json/wp/v2/posts?_embed&per_page=3')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts', error);
            });
    }, []);

    return (
        <div className="container-fluid tw-bg-pink-950 py-5" id="blog">
            <div className="container text-center text-white py-5">
                <small className="mb-5">Nosso Blog</small>
                <h3 className="mb-2">Nossos artigos recentes</h3>
                <p className="mb-5">
                    Assim como nos mantemos informados sobre o que está rolando no mundo digital, <br/>
                    gostamos de repassar aos nossos clientes nossa visão de mundo
                </p>
                <div className="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-gap-10 tw-text-left text-white">
                    {posts.map(post => (
                        <div key={post.id} className="card border-0 bg-transparent text-white">
                            <div
                                className="card-img-top"
                                style={{
                                    backgroundImage: `url(${post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/300'})`,
                                    height: "200px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>
                            <div className="card-body tw-bg-transparent">
                                <h5 className="card-title tw-mt-3 py-2">{post.title.rendered}</h5>
                                <span className="btn-danger tw-px-3 tw-py-1 py-2 tw-mb-3">
                                    {new Date(post.date).toLocaleDateString()}
                                </span>
                                <p className="card-text mt-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                <a href={post.link} className="btn btn-danger rounded-pill" target="_blank" rel="noopener noreferrer">Leia +</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;

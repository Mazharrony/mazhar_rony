'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getLabelConceptBySlug } from '@/src/data/labelConcepts';
import './LabelConceptPage.css';

export default function LabelConceptPage({ slug }: { slug: string }) {
  const concept = getLabelConceptBySlug(slug);

  if (!concept) {
    return (
      <section className="label-concept-page">
        <div className="label-concept-container">
          <div className="label-concept-notfound">
            <h1>Project not found</h1>
            <p>This label concept doesn’t exist (or the link is incorrect).</p>
            <Link className="label-concept-back" href="/work">
              Back to Work →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const frameClass = concept.frameBg === 'light' ? 'is-light' : 'is-dark';

  return (
    <section className={`label-concept-page ${frameClass}`}>
      <div className="label-concept-container">
        {/* Hero */}
        <div className="label-hero">
          <div className="label-hero-copy">
            <div className="label-hero-breadcrumb">
              <Link href="/work">Work</Link>
              <span> / </span>
              <span>Packaging</span>
            </div>

            <h1 className="label-hero-title">{concept.title}</h1>
            <p className="label-hero-subtitle">
              {concept.description}
            </p>

            <div className="label-hero-meta">
              {concept.role && (
                <div className="label-meta">
                  <div className="label-meta-k">Role</div>
                  <div className="label-meta-v">{concept.role}</div>
                </div>
              )}
              {concept.deliverables?.length ? (
                <div className="label-meta">
                  <div className="label-meta-k">Deliverables</div>
                  <div className="label-meta-v">{concept.deliverables.join(' • ')}</div>
                </div>
              ) : null}
              {concept.tools?.length ? (
                <div className="label-meta">
                  <div className="label-meta-k">Tools</div>
                  <div className="label-meta-v">{concept.tools.join(' • ')}</div>
                </div>
              ) : null}
            </div>
          </div>

          <motion.div
            className="label-hero-media"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label-hero-image">
              <Image
                src={concept.heroImage}
                alt={`${concept.title} mockup`}
                fill
                sizes="(max-width: 768px) 92vw, 520px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Label (flat) */}
        <div className="label-section">
          <div className="label-section-head">
            <h2>Label artwork</h2>
            <p>The flat label file—typography, hierarchy, and graphic system in one view.</p>
          </div>
          <div className="label-flat">
            <Image
              src={concept.labelImage}
              alt={`${concept.title} label artwork`}
              width={1600}
              height={900}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="label-section">
          <div className="label-section-head">
            <h2>Mockup gallery</h2>
            <p>Mockups and process shots for presentation and consistency checks.</p>
          </div>

          <div className="label-gallery">
            {concept.gallery.map((src, idx) => (
              <div key={`${concept.id}-${idx}`} className="label-gallery-card">
                <div className="label-gallery-frame">
                  <Image
                    src={src}
                    alt={`${concept.title} gallery image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 360px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More content */}
        <div className="label-section label-more">
          <div className="label-section-head">
            <h2>Design notes</h2>
            <p>What I optimized for—clarity, shelf impact, and a cohesive system across variants.</p>
          </div>

          <div className="label-notes-grid">
            <div className="label-note">
              <h3>Hierarchy first</h3>
              <p>
                The main name and key benefit cues are designed to read fast in a crowded shelf context and on mobile thumbnails.
              </p>
            </div>
            <div className="label-note">
              <h3>System consistency</h3>
              <p>
                Graphics, icons, and typographic rhythm are treated as a system so future variants can scale without looking random.
              </p>
            </div>
            <div className="label-note">
              <h3>Premium finish</h3>
              <p>
                Controlled contrast and spacing keep it premium—bold enough to stand out, clean enough to trust.
              </p>
            </div>
          </div>
        </div>

        <div className="label-footer-nav">
          <Link className="label-concept-back" href="/work">
            ← Back to Work
          </Link>
        </div>
      </div>
    </section>
  );
}



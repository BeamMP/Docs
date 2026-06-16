<script setup lang="ts">
import { Github, Facebook, Instagram, createLucideIcon } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const XIcon = createLucideIcon('X', [
  [
    'path',
    {
      d: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
      stroke: 'none',
      fill: 'currentColor'
    }
  ]
])

const BlueskyIcon = createLucideIcon('Bluesky', [
  [
    'path',
    {
      d: 'M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026',
      stroke: 'none',
      fill: 'currentColor'
    }
  ]
])

const RedditIcon = createLucideIcon('Reddit', [
  [
    'path',
    {
      d: 'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z',
      stroke: 'none',
      fill: 'currentColor'
    }
  ]
])

const DiscordIcon = createLucideIcon('Discord', [
  [
    'path',
    {
      d: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z',
      stroke: 'none',
      fill: 'currentColor'
    }
  ]
])

const YouTubeIcon = createLucideIcon('YouTube', [
  [
    'path',
    {
      d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      stroke: 'none',
      fill: 'currentColor'
    }
  ]
])

const TikTokIcon = createLucideIcon('TikTok', [
  [
    'path',
    {
      d: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
      stroke: 'none',
      fill: 'currentColor'
    }
  ]
])

const socials = [
  { label: 'GitHub', href: 'https://github.com/BeamMP', icon: Github },
  { label: 'Discord', href: 'https://discord.gg/beammp', icon: DiscordIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@beammpofficial', icon: YouTubeIcon },
  { label: 'X', href: 'https://x.com/beammpofficial', icon: XIcon },
  { label: 'Reddit', href: 'https://www.reddit.com/r/BeamMP', icon: RedditIcon },
  { label: 'Bluesky', href: 'https://bsky.app/profile/beammp.com', icon: BlueskyIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/beammpofficial', icon: Instagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@beammpofficial', icon: TikTokIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/BeamMPTeam', icon: Facebook }
] as const
</script>

<template>
  <footer class="bm-footer">
    <div class="bm-footer__inner">
      <div class="bm-footer__socials">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="bm-footer__social-link"
        >
          <component :is="social.icon" aria-hidden="true" />
        </a>
        <span class="bm-footer__divider" aria-hidden="true">|</span>
        <a
          href="https://www.patreon.com/BeamMP"
          target="_blank"
          rel="noopener noreferrer"
          class="bm-footer__patreon"
        >
          Support on Patreon
        </a>
      </div>

      <div class="bm-footer__legal">
        <p class="bm-footer__copyright">
          © 2019 - {{ currentYear }} | BeamMP Mod Team All Rights Reserved
        </p>
        <div class="bm-footer__links">
          <a
            href="https://beammp.com/about"
            target="_blank"
            rel="noopener noreferrer"
            class="bm-footer__legal-link"
          >
            About
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="https://forum.beammp.com/topic/95/privacy-policy-v1-0"
            target="_blank"
            rel="noopener noreferrer"
            class="bm-footer__legal-link"
          >
            Privacy Policy
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="https://forum.beammp.com/topic/94/terms-of-use-v1-0"
            target="_blank"
            rel="noopener noreferrer"
            class="bm-footer__legal-link"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

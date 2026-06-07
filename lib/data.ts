import {
  Megaphone, Film, Camera, Video, MonitorPlay,
  Calendar, PenTool, Image as ImageIcon, Heart, Youtube, Clapperboard, VideoIcon
} from "lucide-react"

export type Category = {
  title: string;
  description: string;
  icon: any;
  type: "video" | "form";
  slug: string;
  bgImage: string;
  bgVideo?: string;
}

export const workCategories: Category[] = [
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "We promote your brand across online platforms.",
    icon: Megaphone,
    type: "video",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    // Example of a reference background video you can replace:
    // bgVideo: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    description: "We make your videos look neat, smooth, and ready to share.",
    icon: Film,
    type: "video",
    bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2340&auto=format&fit=crop"
  },
  {
    title: "Shoot & Edit",
    slug: "shoot-and-edit",
    description: "From filming to final edit, we handle everything.",
    icon: Camera,
    type: "video",
    bgImage: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2342&auto=format&fit=crop"
  },
  {
    title: "Events",
    slug: "events",
    description: "We shoot your event from start to finish.",
    icon: Calendar,
    type: "video",
    bgImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2342&auto=format&fit=crop"
  },
  // {
  //   title: "Motion Graphics",
  //   slug: "motion-graphics",
  //   description: "Motion graphics for videos, ads, and more.",
  //   icon: Video,
  //   type: "form",
  //   bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
  // },
  // {
  //   title: "AI Videos & Photos",
  //   slug: "ai-videos-and-photos",
  //   description: "AI-made visuals for content, ads, and social media.",
  //   icon: MonitorPlay,
  //   type: "form",
  //   bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
  // },
  {
    title: "Designing",
    slug: "designing",
    description: "We design visuals that look clean and make sense.",
    icon: PenTool,
    type: "form",
    bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Photoshoots",
    slug: "photoshoots",
    description: "We handle the shoot and deliver clean photos.",
    icon: ImageIcon,
    type: "form",
    bgImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Weddings & Function",
    slug: "weddings-and-function",
    description: "We document your special day as it happens.",
    icon: Heart,
    type: "form",
    bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Youtube Videos",
    slug: "youtube-videos",
    description: "We create and edit videos made for YouTube.",
    icon: Youtube,
    type: "form",
    bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Films",
    slug: "films",
    description: "We create films with strong visuals and flow.",
    icon: Clapperboard,
    type: "form",
    bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Documentaries",
    slug: "documentaries",
    description: "We tell real stories through documentary films.",
    icon: VideoIcon,
    type: "form",
    bgImage: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2000&auto=format&fit=crop"
  },
]

export type Video = {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export const categoryVideos: Record<string, Video[]> = {
  "digital-marketing": [
    {
      id: 1,
      title: "Bajaj Showroom Showcase",
      thumbnail: "/digital/IMG_0878.PNG",
      videoUrl: '/videos/adithya yamaha.mp4'
    },
    {
      id: 2,
      title: "Toni & Guy Essensuals Salon",
      thumbnail: "/digital/tony thambnail.png",
      videoUrl: "/videos/tony & guy reel.mp4"
    },
    {
      id: 3,
      title: "Muthus College of Allied Health Science",
      thumbnail: "/digital/IMG_0873.PNG",
      videoUrl: "/videos/Dr.Indhira mam.mp4"
    },
    {
      id: 4,
      title: "Supreme Mobiles Showroom Tour",
      thumbnail: "/digital/IMG_0867.PNG",
      videoUrl: "/videos/IMG_0826.MP4"
    },
    {
      id: 5,
      title: "NOWMI Unisex Salon Building",
      thumbnail: "/digital/IMG_0871.PNG",
      videoUrl: "/videos/IMG_0824.MP4"
    },
    {
      id: 6,
      title: "SRSAVT Speed Roller Skating Academy Promo",
      thumbnail: "/digital/IMG_0870.PNG",
      videoUrl: "/videos/IMG_0825.MP4"
    },
    {
      id: 7,
      title: "Allied Health Science Campaign Video",
      thumbnail: "/digital/IMG_0874.PNG",
      videoUrl: "/videos/allied 01.mp4"
    },
    {
      id: 8,
      title: "Science Lab & Competitive Exam Coaching Reel",
      thumbnail: "/digital/IMG_0847.PNG",
      videoUrl: "/videos/IMG_0827.MP4"
    },
  ],
  "video-editing": [
    {
      id: 1,
      title: "Salem RR Biryani Restaurant Promo",
      thumbnail: "/editing img/IMG_0845.PNG",
      videoUrl: "/editing vid/IMG_0830.MP4"
    },
    {
      id: 2,
      title: "Sathya Agencies AC Promotional Campaign",
      thumbnail: "/editing img/IMG_0866.PNG",
      videoUrl: "/editing vid/IMG_0831.MP4"
    },
    {
      id: 3,
      title: "Dharapuram Government Hospital Inauguration Showcase",
      thumbnail: "/editing img/image.png",
      videoUrl: "/editing vid/IMG_0828.MP4"
    },
    {
      id: 4,
      title: "Bajaj & Chetak Showroom Exterior",
      thumbnail: "/editing img/IMG_0867.PNG",
      videoUrl: "/editing vid/IMG_0829.MP4"
    },
    {
      id: 5,
      title: "Velavan Lodge Promotional Video",
      thumbnail: "/editing img/IMG_0865.PNG",
      videoUrl: "/editing vid/IMG_0832.MP4"
    },
    {
      id: 6,
      title: "Sri Kandavel Jewellers Showroom Exterior",
      thumbnail: "/editing img/IMG_0848.PNG",
      videoUrl: "/editing vid/IMG_0833.MP4"
    },
    {
      id: 7,
      title: "Infinity Sports Dharapuram Brand Video",
      thumbnail: "/editing img/IMG_0861.PNG",
      videoUrl: "/editing vid/IMG_0837.MP4"
    },
    {
      id: 8,
      title: "Infinity Sports Dharapuram Brand Video",
      thumbnail: "/editing img/IMG_0860.PNG",
      videoUrl: "/editing vid/IMG_0838.MP4"
    },
    {
      id: 9,
      title: "Trainer Insight at Infinity Sports Club",
      thumbnail: "/editing img/IMG_0859.PNG",
      videoUrl: "/editing vid/IMG_0839.MP4"
    },
    {
      id: 10,
      title: "Women's Boxing Championship Promo",
      thumbnail: "/editing img/IMG_0858.PNG",
      videoUrl: "/editing vid/IMG_0840.MP4"
    },
    {
      id: 11,
      title: "English Interview Tips by Beyond Bound",
      thumbnail: "/editing img/IMG_0855.PNG",
      videoUrl: "/editing vid/IMG_0841.MP4"
    },
    {
      id: 12,
      title: "Professional Interview Preparation Guide",
      thumbnail: "/editing img/IMG_0857.PNG",
      videoUrl: "/editing vid/IMG_0842.MP4"
    },
    {
      id: 13,
      title: "Career Guidance & Interview Tips Series",
      thumbnail: "/editing img/IMG_0852.PNG",
      videoUrl: "/editing vid/IMG_0843.MP4"
    },
    {
      id: 14,
      title: "Sathya Agencies AC Promotional Campaign",
      thumbnail: "/editing img/IMG_0853.PNG",
      videoUrl: "/editing vid/IMG_0844.MP4"
    },
  ],
  "shoot-and-edit": [
    {
      id: 1,
      title: "Agan Motors Dharapuram Brand Video",
      thumbnail: "/shootedit img/IMG_0849.PNG",
      videoUrl: "/shootedit vid/IMG_0834.MP4"
    },
    {
      id: 2,
      title: "Sathya Agencies AC Promotional Campaign",
      thumbnail: "/shootedit img/IMG_0866.PNG",
      videoUrl: "/shootedit vid/IMG_0835.MP4"
    },
    {
      id: 3,
      title: "Supreme Mobiles & Oppo Brand Promotion",
      thumbnail: "/shootedit img/IMG_0862.PNG",
      videoUrl: "/shootedit vid/IMG_0836.MP4"
    },
  ],
  "events": [
    {
      id: 1,
      title: "Muthus College of Allied Health Science Admission Video",
      thumbnail: "/event img/IMG_0875.PNG",
      videoUrl: "/event vid/nursing student.mp4"
    },
    {
      id: 2,
      title: "Surya Tea Outlet Exterior Showcase",
      thumbnail: "/event img/IMG_0872.PNG",
      videoUrl: "/event vid/IMG_0739.MP4"
    },
  ],
}

import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, ArrowDown, Mail, FolderGit2, 
  User, Calendar, MapPin, BookOpen, UserCheck, 
  GraduationCap, Code, Cpu, HeartHandshake, Target, 
  Send, AlertCircle, ArrowUp, ExternalLink, Github 
} from 'lucide-react';

// ==========================================
// DỮ LIỆU CÁ NHÂN (DATA)
// ==========================================
const personalData = {
  fullName: "Lê Thị Thùy Vân",
  birthDate: "01/09/2007",
  email: "thuyvanle1907@gmail.com",
  address: "135/13, Khu phố Bình Quới B, phường Thuận Giao, Thành phố Hồ Chí Minh",
  major: "Công nghệ thông tin",
  status: "Sinh viên",
  heroGreeting: "XIN CHÀO, TÔI LÀ",
  heroSubHeading: "Sinh viên Công nghệ thông tin",
  bioHero: "Tôi là sinh viên ngành Công nghệ thông tin, luôn mong muốn học hỏi kiến thức mới, phát triển kỹ năng chuyên môn và tích lũy kinh nghiệm thực tế. Tôi hướng đến việc hoàn thiện bản thân và tìm kiếm cơ hội phát triển trong môi trường làm việc chuyên nghiệp.",
  aboutText: "Tôi là Lê Thị Thùy Vân, hiện đang là sinh viên ngành Công nghệ thông tin. Tôi quan tâm đến lĩnh vực công nghệ, lập trình và phát triển các sản phẩm số. Tôi mong muốn được học hỏi từ những trải nghiệm thực tế, rèn luyện tư duy giải quyết vấn đề và từng bước xây dựng nền tảng chuyên môn vững chắc.",
  objectiveText: "Trong thời gian tới, tôi mong muốn củng cố kiến thức chuyên ngành Công nghệ thông tin, nâng cao kỹ năng thực hành và tham gia các dự án thực tế. Tôi hướng đến việc tìm kiếm cơ hội thực tập hoặc làm việc phù hợp để học hỏi, tích lũy kinh nghiệm và phát triển nghề nghiệp lâu dài."
};

const educationData = [
  {
    id: "edu-1",
    degree: "Đại học",
    major: "Công nghệ thông tin",
    status: "Đang học",
    schoolName: "Trường Đại học Công nghệ / CNTT",
    period: "2025 - Hiện tại"
  }
];

const skillCategories = [
  {
    category: "Kỹ năng chuyên môn",
    skills: ["Lập trình Web", "Phát triển ứng dụng", "Cơ sở dữ liệu", "Cấu trúc dữ liệu"]
  },
  {
    category: "Công nghệ & Ngôn ngữ",
    skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Git / GitHub"]
  },
  {
    category: "Kỹ năng mềm",
    skills: ["Giao tiếp", "Làm việc nhóm", "Quản lý thời gian", "Tự học & Tư duy logic"]
  }
];

const projectsData = [
  {
    id: "proj-1",
    title: "Website CV & Portfolio Cá Nhân",
    description: "Trang web giới thiệu bản thân được thiết kế theo phong cách Minimalist Modern với tông màu pastel nhẹ nhàng, tích hợp Dark/Light mode và phản hồi linh hoạt trên đa thiết bị.",
    technologies: ["React", "Tailwind CSS", "Lucide Icons"],
    githubUrl: "#",
    demoUrl: "#"
  }
];

// ==========================================
// COMPONENT CHÍNH
// ==========================================
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showNotice, setShowNotice] = useState(false);

  // Chuyển đổi Dark / Light mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Xử lý sự kiện Cuộn trang (Scroll)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotice(true);
    setTimeout(() => setShowNotice(false), 5000);
  };

  const navItems = [
    { id: 'hero', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'education', label: 'Học vấn' },
    { id: 'skills', label: 'Kỹ năng' },
    { id: 'projects', label: 'Dự án' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const infoCards = [
    { icon: <User className="text-[#453B3D] dark:text-[#F2DDE3]" size={20} />, label: "Họ và tên", value: personalData.fullName },
    { icon: <Calendar className="text-[#453B3D] dark:text-[#F2DDE3]" size={20} />, label: "Ngày sinh", value: personalData.birthDate },
    { icon: <Mail className="text-[#453B3D] dark:text-[#F2DDE3]" size={20} />, label: "Email", value: personalData.email, isEmail: true },
    { icon: <MapPin className="text-[#453B3D] dark:text-[#F2DDE3]" size={20} />, label: "Địa chỉ", value: personalData.address },
    { icon: <BookOpen className="text-[#453B3D] dark:text-[#F2DDE3]" size={20} />, label: "Chuyên ngành", value: personalData.major },
    { icon: <UserCheck className="text-[#453B3D] dark:text-[#F2DDE3]" size={20} />, label: "Trạng thái", value: personalData.status },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-zinc-950 text-[#453B3D] dark:text-zinc-100 font-sans transition-colors duration-300">
      
      {/* ---------------- NAVBAR ---------------- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFFFFF]/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm py-3 border-b border-[#EAE7E5]/50 dark:border-zinc-800' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F2DDE3] to-[#EAE7E5] dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center font-bold text-[#453B3D] dark:text-zinc-100 shadow-sm group-hover:scale-105 transition-transform">
              TV
            </div>
            <span className="font-bold text-lg text-[#453B3D] dark:text-zinc-100 hidden sm:inline tracking-tight">
              Thùy Vân
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-[#F8F6F2]/80 dark:bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#EAE7E5] dark:border-zinc-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#F2DDE3] text-[#453B3D] shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-[#453B3D] dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Chuyển đổi Chế độ Sáng/Tối"
              className="p-2.5 rounded-full bg-[#F8F6F2] dark:bg-zinc-900 text-[#453B3D] dark:text-zinc-100 border border-[#EAE7E5] dark:border-zinc-800 hover:bg-[#F2DDE3]/50 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-[#F8F6F2] dark:bg-zinc-900 text-[#453B3D] dark:text-zinc-100 border border-[#EAE7E5] dark:border-zinc-800"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFFFF] dark:bg-zinc-900 border-b border-[#EAE7E5] dark:border-zinc-800 px-4 py-4 space-y-2 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  activeSection === item.id
                    ? 'bg-[#F2DDE3] text-[#453B3D]'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-[#F8F6F2] dark:hover:bg-zinc-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
        {/* Visual accents */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2DDE3]/40 dark:bg-[#F2DDE3]/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F8F6F2] dark:bg-zinc-900/40 rounded-full filter blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#F2DDE3]/70 dark:bg-zinc-800 text-[#453B3D] dark:text-[#F2DDE3] font-semibold text-xs tracking-wider uppercase border border-[#EAE7E5] dark:border-zinc-700">
                {personalData.heroGreeting}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#453B3D] dark:text-zinc-100 tracking-tight leading-tight">
                {personalData.fullName}
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-[#453B3D]/80 dark:text-[#F2DDE3]">
                {personalData.heroSubHeading}
              </p>

              <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {personalData.bioHero}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollTo('projects')}
                  className="px-6 py-3 rounded-xl bg-[#453B3D] dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-700 dark:hover:bg-white shadow-sm hover:shadow transition-all flex items-center gap-2"
                >
                  <FolderGit2 size={18} />
                  Xem Portfolio
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="px-6 py-3 rounded-xl bg-[#F2DDE3] text-[#453B3D] font-semibold text-sm hover:bg-[#EAE7E5] transition-all flex items-center gap-2 shadow-sm border border-[#EAE7E5]"
                >
                  <Mail size={18} />
                  Liên hệ với tôi
                </button>
              </div>
            </div>

            {/* Avatar Placeholder Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#F2DDE3] to-[#EAE7E5] dark:from-zinc-800 dark:to-zinc-700 opacity-70 blur-lg"></div>
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl bg-[#F8F6F2] dark:bg-zinc-900 border-2 border-[#FFFFFF] dark:border-zinc-800 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center p-6">
                  <div className="w-28 h-28 rounded-full bg-[#F2DDE3] dark:bg-zinc-800 flex items-center justify-center text-[#453B3D] dark:text-[#F2DDE3] font-bold text-3xl mb-4 shadow-inner border border-[#EAE7E5] dark:border-zinc-700">
                    TV
                  </div>
                  <h3 className="font-bold text-lg text-[#453B3D] dark:text-zinc-200">
                    {personalData.fullName}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Ảnh đại diện cá nhân
                  </p>
                  <span className="mt-4 px-3 py-1 bg-white dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-300 rounded-full border border-[#EAE7E5] dark:border-zinc-700">
                    Chuyên ngành Công nghệ thông tin
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => scrollTo('about')} 
              className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-[#453B3D] dark:hover:text-zinc-200 transition-colors animate-bounce"
            >
              Cuộn xuống để khám phá
              <ArrowDown size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="py-20 bg-[#F8F6F2]/60 dark:bg-zinc-900/40 border-y border-[#EAE7E5]/60 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#453B3D] dark:text-zinc-100 tracking-tight">
              Giới thiệu về tôi
            </h2>
            <div className="w-12 h-1 bg-[#F2DDE3] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-[#EAE7E5] dark:border-zinc-800 shadow-sm mb-12">
            <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed text-center">
              {personalData.aboutText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {infoCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#EAE7E5] dark:border-zinc-800 hover:border-[#F2DDE3] dark:hover:border-zinc-700 transition-all flex items-start gap-4 shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-[#F2DDE3]/60 dark:bg-zinc-800 shrink-0">
                  {card.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    {card.label}
                  </span>
                  {card.isEmail ? (
                    <a 
                      href={`mailto:${card.value}`} 
                      className="block text-sm font-semibold text-[#453B3D] dark:text-zinc-200 hover:underline truncate mt-0.5"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[#453B3D] dark:text-zinc-200 break-words mt-0.5">
                      {card.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EDUCATION TIMELINE ---------------- */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#453B3D] dark:text-zinc-100 tracking-tight">
              Quá trình học vấn
            </h2>
            <div className="w-12 h-1 bg-[#F2DDE3] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-[#F2DDE3] dark:border-zinc-800 space-y-8">
            {educationData.map((item) => (
              <div key={item.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-[#F2DDE3] dark:bg-zinc-800 border-4 border-white dark:border-zinc-950 flex items-center justify-center text-[#453B3D] dark:text-[#F2DDE3] shadow-sm">
                  <GraduationCap size={16} />
                </div>

                <div className="bg-[#F8F6F2]/80 dark:bg-zinc-900 p-6 rounded-2xl border border-[#EAE7E5] dark:border-zinc-800">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F2DDE3] text-[#453B3D]">
                      {item.degree}
                    </span>
                    {item.period && (
                      <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#453B3D] dark:text-zinc-100 mt-2">
                    Chuyên ngành: {item.major}
                  </h3>

                  {item.schoolName && (
                    <p className="text-zinc-600 dark:text-zinc-300 font-medium text-sm mt-1">
                      {item.schoolName}
                    </p>
                  )}

                  <div className="mt-4 pt-3 border-t border-[#EAE7E5] dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">Trạng thái hiện tại:</span>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-800/40">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS SECTION ---------------- */}
      <section id="skills" className="py-20 bg-[#F8F6F2]/60 dark:bg-zinc-900/40 border-y border-[#EAE7E5]/60 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#453B3D] dark:text-zinc-100 tracking-tight">
              Kỹ năng cá nhân
            </h2>
            <div className="w-12 h-1 bg-[#F2DDE3] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-[#EAE7E5] dark:border-zinc-800 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EAE7E5] dark:border-zinc-800">
                  <div className="p-2.5 rounded-xl bg-[#F2DDE3]/60 dark:bg-zinc-800">
                    {idx === 0 ? <Code size={20} className="text-[#453B3D] dark:text-[#F2DDE3]" /> : 
                     idx === 1 ? <Cpu size={20} className="text-[#453B3D] dark:text-[#F2DDE3]" /> : 
                     <HeartHandshake size={20} className="text-[#453B3D] dark:text-[#F2DDE3]" />}
                  </div>
                  <h3 className="font-bold text-base text-[#453B3D] dark:text-zinc-100">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-2 rounded-xl text-xs font-semibold bg-[#F8F6F2] dark:bg-zinc-800 text-[#453B3D] dark:text-zinc-200 border border-[#EAE7E5] dark:border-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS SECTION ---------------- */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#453B3D] dark:text-zinc-100 tracking-tight">
              Dự án nổi bật
            </h2>
            <div className="w-12 h-1 bg-[#F2DDE3] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-[#EAE7E5] dark:border-zinc-800 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F2DDE3] dark:bg-zinc-800 flex items-center justify-center text-[#453B3D] dark:text-[#F2DDE3] mb-4">
                    <FolderGit2 size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-[#453B3D] dark:text-zinc-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md bg-[#F8F6F2] dark:bg-zinc-800 text-[11px] font-semibold text-[#453B3D] dark:text-zinc-300 border border-[#EAE7E5] dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#F8F6F2]/50 dark:bg-zinc-950 border-t border-[#EAE7E5] dark:border-zinc-800 flex gap-2">
                  <a 
                    href={project.githubUrl}
                    className="flex-1 py-2 rounded-lg bg-white dark:bg-zinc-800 border border-[#EAE7E5] dark:border-zinc-700 text-xs font-semibold text-[#453B3D] dark:text-zinc-200 flex items-center justify-center gap-1.5 hover:bg-[#F2DDE3]/40 transition-colors"
                  >
                    <Github size={14} /> Mã nguồn
                  </a>
                  <a 
                    href={project.demoUrl}
                    className="flex-1 py-2 rounded-lg bg-[#453B3D] text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-zinc-700 dark:hover:bg-white transition-colors"
                  >
                    <ExternalLink size={14} /> Trực tiếp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CAREER OBJECTIVE ---------------- */}
      <section className="py-16 bg-[#F8F6F2]/60 dark:bg-zinc-900/40 border-y border-[#EAE7E5]/60 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#F2DDE3]/50 via-white to-[#F2DDE3]/50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 p-8 sm:p-10 rounded-3xl border border-[#EAE7E5] dark:border-zinc-800 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="p-4 rounded-2xl bg-[#F2DDE3] dark:bg-zinc-800 text-[#453B3D] dark:text-[#F2DDE3] shrink-0 shadow-sm border border-[#EAE7E5] dark:border-zinc-700">
                <Target size={32} />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-[#453B3D] dark:text-zinc-100">
                  Mục tiêu nghề nghiệp
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {personalData.objectiveText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#453B3D] dark:text-zinc-100 tracking-tight">
              Kết nối với tôi
            </h2>
            <div className="w-12 h-1 bg-[#F2DDE3] mx-auto mt-3 rounded-full mb-4"></div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Rất mong có cơ hội trao đổi thêm về các dự án hoặc cơ hội công việc.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8F6F2]/80 dark:bg-zinc-900 p-6 rounded-2xl border border-[#EAE7E5] dark:border-zinc-800 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F2DDE3] dark:bg-zinc-800 text-[#453B3D] dark:text-[#F2DDE3] shrink-0 border border-[#EAE7E5] dark:border-zinc-700">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-zinc-400 uppercase">Email</span>
                    <p className="font-semibold text-[#453B3D] dark:text-zinc-200 text-sm mt-0.5">
                      {personalData.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F2DDE3] dark:bg-zinc-800 text-[#453B3D] dark:text-[#F2DDE3] shrink-0 border border-[#EAE7E5] dark:border-zinc-700">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-zinc-400 uppercase">Khu vực</span>
                    <p className="font-semibold text-[#453B3D] dark:text-zinc-200 text-sm mt-0.5">
                      Thành phố Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${personalData.email}`}
                className="block w-full py-3.5 rounded-xl bg-[#F2DDE3] text-[#453B3D] font-bold text-sm text-center hover:bg-[#EAE7E5] transition-colors shadow-sm border border-[#EAE7E5]"
              >
                Gửi email trực tiếp
              </a>
            </div>

            {/* Test Form */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-[#EAE7E5] dark:border-zinc-800 shadow-sm">
              {showNotice && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-xs flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>
                    Form liên hệ đang ở chế độ thử nghiệm giao diện. Bạn có thể sử dụng nút <strong>"Gửi email trực tiếp"</strong> bên cạnh.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#453B3D] dark:text-zinc-300 mb-1">
                    Họ tên của bạn
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE7E5] dark:border-zinc-700 bg-[#F8F6F2]/40 dark:bg-zinc-950 text-sm text-[#453B3D] dark:text-zinc-100 focus:outline-none focus:border-[#453B3D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#453B3D] dark:text-zinc-300 mb-1">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE7E5] dark:border-zinc-700 bg-[#F8F6F2]/40 dark:bg-zinc-950 text-sm text-[#453B3D] dark:text-zinc-100 focus:outline-none focus:border-[#453B3D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#453B3D] dark:text-zinc-300 mb-1">
                    Nội dung nhắn
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Nội dung cần trao đổi..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EAE7E5] dark:border-zinc-700 bg-[#F8F6F2]/40 dark:bg-zinc-950 text-sm text-[#453B3D] dark:text-zinc-100 focus:outline-none focus:border-[#453B3D] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#453B3D] dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-700 dark:hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Gửi tin nhắn thử nghiệm
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-8 bg-[#F8F6F2] dark:bg-zinc-950 border-t border-[#EAE7E5] dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © 2026 {personalData.fullName}. Minimalist Modern Portfolio.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 rounded-full bg-white dark:bg-zinc-900 text-[#453B3D] dark:text-zinc-200 border border-[#EAE7E5] dark:border-zinc-800 hover:bg-[#F2DDE3] dark:hover:bg-zinc-800 transition-colors shadow-sm"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </footer>

    </div>
  );
}
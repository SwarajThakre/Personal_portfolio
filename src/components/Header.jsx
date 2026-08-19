import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [{ href:'#home', label:'Home' },{ href:'#about', label:'About' },{ href:'#skills', label:'Skills' },{ href:'#education', label:'Education' },{ href:'#project', label:'Projects' },{ href:'#contact', label:'Contact' }];

export default function Header({ onNavigateSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (href) => { setMenuOpen(false); onNavigateSection ? onNavigateSection(href) : document.querySelector(href)?.scrollIntoView({ behavior:'smooth' }); };
  return <header className="fixed inset-x-0 top-0 z-[100] border-b-2 border-[color:var(--border)] bg-[color:var(--header-bg)]"><div className="mx-auto flex h-20 max-w-[95vw] items-center justify-between"><a href="#home" onClick={(e)=>{e.preventDefault();navigate('#home')}} className="text-[1.8rem] font-black uppercase tracking-tighter">Swaraj<span className="text-[color:var(--accent)]">_</span></a><nav className={`${menuOpen?'flex':'hidden'} absolute left-0 right-0 top-20 flex-col border-b-2 border-[color:var(--border)] bg-[color:var(--bg)] p-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}><ul className="flex flex-col md:flex-row">{navLinks.map(({href,label})=><li key={href}><a href={href} onClick={(e)=>{e.preventDefault();navigate(href)}} className="block px-4 py-3 text-[1.3rem] font-bold uppercase tracking-wide hover:bg-[color:var(--accent)] hover:text-black">{label}</a></li>)}</ul></nav><button className="grid h-11 w-11 place-items-center border-2 border-[color:var(--border)] text-[2.2rem] md:hidden" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<HiX/>:<HiMenuAlt3/>}</button></div></header>;
}

'use client'

import { cn } from '@/components/shadcn/lib/utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { TbSun, TbMoon } from 'react-icons/tb'
export function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const [applyClass, setApplyClass] = useState(false)

  useEffect(() => {
    theme === 'light' ? setApplyClass(false) : setApplyClass(true)
  }, [theme])

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className="bg-dark_slate_teal relative flex h-8 w-8 items-center justify-center overflow-hidden rounded"
      >
        <div
          className={cn([
            'absolute left-0 flex items-center gap-2 px-1',
            applyClass &&
              '-translate-x-8 transform transition-all duration-500 ease-in-out',
            !applyClass && 'transform transition-all duration-500 ease-in-out'
          ])}
        >
          <TbSun
            className={cn([
              'h-6 w-6 stroke-timberwolf opacity-10',
              !applyClass &&
                'opacity-100 transition-all duration-500 ease-in-out'
            ])}
          />
          <TbMoon
            className={cn([
              'h-6 w-6 stroke-timberwolf opacity-10',
              applyClass &&
                'opacity-100 transition-all duration-500 ease-in-out'
            ])}
          />
        </div>
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  )
}

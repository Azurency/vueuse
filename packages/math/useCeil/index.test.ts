import { describe, expect, it } from 'vitest'
import { ref as deepRef } from 'vue'
import { useCeil } from './index'

describe('useCeil', () => {
  it('should be defined', () => {
    expect(useCeil).toBeDefined()
  })
  it('should work', () => {
    const base = deepRef(0.95)
    const result = useCeil(base)
    expect(result.value).toBe(1)
    base.value = -7.004
    expect(result.value).toBe(-7)
  })
})

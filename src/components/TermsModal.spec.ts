import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TermsModal from './TermsModal.vue'

describe('TermsModal', () => {
  it('renders properly', () => {
    const wrapper = mount(TermsModal)
    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('Terms & Conditions')
  })

  it('emits close event when close button is clicked', async () => {
    const wrapper = mount(TermsModal)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('emits close event when escape key is pressed', async () => {
    const wrapper = mount(TermsModal)
    await wrapper.trigger('keydown.esc')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})

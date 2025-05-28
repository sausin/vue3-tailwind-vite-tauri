import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Login from './Login.vue';

describe('Login.vue', () => {
  it('renders phone input initially', () => {
    const wrapper = mount(Login);
    expect(wrapper.find('input#phone').exists()).toBe(true);
    expect(wrapper.find('input#otp').exists()).toBe(false);
  });

  it('validates phone number input and enables send OTP button', async () => {
    const wrapper = mount(Login);
    const phoneInput = wrapper.find('input#phone');
    const sendButton = wrapper.find('button');

    await phoneInput.setValue('12345');
    expect(sendButton.element.disabled).toBe(true);

    await phoneInput.setValue('1234567890');
    expect(sendButton.element.disabled).toBe(false);
  });

  it('shows OTP input after sending OTP', async () => {
    const wrapper = mount(Login);
    const phoneInput = wrapper.find('input#phone');
    const sendButton = wrapper.find('button');

    await phoneInput.setValue('1234567890');
    await sendButton.trigger('click');

    expect(wrapper.find('input#phone').exists()).toBe(false);
    expect(wrapper.find('input#otp').exists()).toBe(true);
  });

  it('auto-submits OTP when 6 digits entered', async () => {
    const wrapper = mount(Login);
    const phoneInput = wrapper.find('input#phone');
    const sendButton = wrapper.find('button');

    await phoneInput.setValue('1234567890');
    await sendButton.trigger('click');

    const otpInput = wrapper.find('input#otp');
    const verifyOtpSpy = vi.spyOn(wrapper.vm, 'verifyOtp');

    await otpInput.setValue('123456');
    // Trigger input event
    await otpInput.trigger('input');

    expect(verifyOtpSpy).toHaveBeenCalled();
  });
});

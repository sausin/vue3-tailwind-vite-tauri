<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
    <div class="w-full max-w-md">
      <!-- Logo placeholder -->
      <div class="mb-8 flex justify-center">
        <div class="text-4xl font-bold tracking-wide">LOGO</div>
      </div>

      <!-- Phone number input -->
      <div v-if="!otpSent" class="space-y-4">
        <label for="phone" class="block text-sm font-semibold mb-1">Phone Number</label>
        <input
          id="phone"
          type="tel"
          inputmode="numeric"
          pattern="[0-9]*"
          placeholder="+1 234 567 8901"
          v-model="phoneNumber"
          @input="validatePhone"
          class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
          autocomplete="tel"
          aria-describedby="phoneHelp"
        />
        <p id="phoneHelp" class="text-xs text-gray-600">Enter your phone number to receive an OTP.</p>
        <button
          :disabled="!isPhoneValid"
          @click="sendOtp"
          class="w-full bg-black text-white py-3 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Send OTP
        </button>
      </div>

      <!-- OTP input -->
      <div v-else class="space-y-4">
        <label for="otp" class="block text-sm font-semibold mb-1">Enter OTP</label>
        <input
          id="otp"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          maxlength="6"
          placeholder="Enter 6-digit OTP"
          v-model="otp"
          @input="onOtpInput"
          class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
          autocomplete="one-time-code"
          aria-describedby="otpHelp"
        />
        <p id="otpHelp" class="text-xs text-gray-600">We have sent an OTP to your phone number.</p>
      </div>

      <!-- Terms and Conditions -->
      <p class="mt-8 text-xs text-gray-600 text-center">
        By continuing, you agree to our
        <button 
          @click="showTermsModal = true" 
          class="underline hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Terms & Conditions
        </button>.
      </p>
    </div>

    <!-- Terms Modal -->
    <TermsModal v-if="showTermsModal" @close="showTermsModal = false" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TermsModal from './TermsModal.vue';

const phoneNumber = ref('');
const otp = ref('');
const otpSent = ref(false);
const isPhoneValid = ref(false);
const showTermsModal = ref(false);

function validatePhone() {
  // Basic phone number validation: length and digits only
  const phoneRegex = /^[0-9]{10,15}$/;
  const digitsOnly = phoneNumber.value.replace(/\D/g, '');
  isPhoneValid.value = phoneRegex.test(digitsOnly);
}

function sendOtp() {
  if (!isPhoneValid.value) return;
  otpSent.value = true;
  otp.value = '';
  // TODO: Integrate OTP sending API here
  console.log('OTP sent to:', phoneNumber.value);
}

function onOtpInput() {
  // Allow only digits
  otp.value = otp.value.replace(/\D/g, '');
  if (otp.value.length === 6) {
    // Auto-submit OTP for verification
    verifyOtp();
  }
}

function verifyOtp() {
  // TODO: Integrate OTP verification API here
  console.log('Verifying OTP:', otp.value);
  // On success, proceed with login
  alert('Login successful!');
}

// Placeholder for native OTP auto-read integration for future enhancement
</script>

<style scoped>
/* Subtle transition for OTP input appearance */
</style>

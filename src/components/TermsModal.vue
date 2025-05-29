<template>
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
    role="dialog" 
    aria-modal="true"
    @keydown.esc="$emit('close')"
  >
    <div class="bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 overflow-hidden">
      <!-- Header -->
      <div class="relative">
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          alt="Terms Banner"
          class="w-full h-40 object-cover rounded-t-lg"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <h2 class="absolute bottom-4 left-6 text-2xl font-semibold text-white">Terms & Conditions</h2>
      </div>

      <!-- Content -->
      <div class="p-6 max-h-[400px] overflow-y-auto text-gray-700 space-y-4">
        <h3 class="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
        <p>
          By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h3 class="text-xl font-semibold mt-6">2. Use License</h3>
        <p>
          Permission is granted to temporarily access the materials (information or software) on our website for personal,
          non-commercial transitory viewing only.
        </p>

        <h3 class="text-xl font-semibold mt-6">3. Disclaimer</h3>
        <p>
          The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and
          hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation
          of rights.
        </p>

        <h3 class="text-xl font-semibold mt-6">4. Limitations</h3>
        <p>
          In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of
          data or profit, or due to business interruption) arising out of the use or inability to use our materials, even if
          we or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h3 class="text-xl font-semibold mt-6">5. Privacy Policy</h3>
        <p>
          Your use of our service is also governed by our Privacy Policy. Please review our Privacy Policy, which also
          governs the Site and informs users of our data collection practices.
        </p>

        <h3 class="text-xl font-semibold mt-6">6. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably
          submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h3 class="text-xl font-semibold mt-6">7. Changes to Terms</h3>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material we will provide at least 30 days notice prior to any new terms taking effect.
        </p>
      </div>

      <!-- Footer -->
      <div class="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
        <button
          @click="$emit('close')"
          class="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

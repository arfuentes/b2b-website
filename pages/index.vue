<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-secondary-500 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-slide-up">
              Smarter, faster hiring starts here
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-primary-100 animate-slide-up" style="animation-delay: 0.1s;">
              Your All-in-One Solution for Streamlined Recruitment
            </p>
            <div class="flex flex-col space-y-4 animate-slide-up" style="animation-delay: 0.2s;">
              <NuxtLink :to="localePath('/try-free')" class="bg-accent-300 hover:bg-accent-400 text-neutral-900 font-bold py-3 px-8 rounded-lg text-center transition-colors">
                Start your Free Trial Today
              </NuxtLink>
              <p class="text-sm text-center text-primary-100">No credit card required</p>
              <div class="bg-primary-700/50 p-4 rounded-lg mt-4">
                <p class="text-sm text-primary-100">
                  Try Zamdit in Sample Data mode to test most of the platform's features without needing to add data or invite candidates.
                </p>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 animate-fade-in" style="animation-delay: 0.3s;">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Hero Image" class="rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Trusted By Section -->
    <section class="py-16 bg-neutral-50">
      <div class="container mx-auto px-4">
        <h2 class="text-center text-2xl font-heading font-bold mb-12 text-neutral-800">
          {{ $t('home.trustedBy.title') }}
        </h2>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <!-- These would be replaced with actual company logos -->
          <div class="w-32 h-12 bg-neutral-200 rounded opacity-70 hover:opacity-100 transition-opacity"></div>
          <div class="w-32 h-12 bg-neutral-200 rounded opacity-70 hover:opacity-100 transition-opacity"></div>
          <div class="w-32 h-12 bg-neutral-200 rounded opacity-70 hover:opacity-100 transition-opacity"></div>
          <div class="w-32 h-12 bg-neutral-200 rounded opacity-70 hover:opacity-100 transition-opacity"></div>
          <div class="w-32 h-12 bg-neutral-200 rounded opacity-70 hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4 text-neutral-800">
            {{ $t('home.features.title') }}
          </h2>
          <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
            {{ $t('home.features.subtitle') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3 text-neutral-800">Comprehensive Assessments</h3>
            <p class="text-neutral-600">Access a library of validated assessments for technical skills, personality, cognitive abilities, and more.</p>
          </div>
          
          <!-- Feature 2 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3 text-neutral-800">Candidate Engagement</h3>
            <p class="text-neutral-600">Create personalized, branded experiences for candidates with interactive assessments.</p>
          </div>
          
          <!-- Feature 3 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3 text-neutral-800">Advanced Analytics</h3>
            <p class="text-neutral-600">Gain valuable insights with detailed reporting and analytics to make data-driven decisions.</p>
          </div>
          
          <!-- Feature 4 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3 text-neutral-800">Enterprise Security</h3>
            <p class="text-neutral-600">Protect sensitive data with enterprise-grade security features and compliance standards.</p>
          </div>
          
          <!-- Feature 5 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3 text-neutral-800">Customizable Workflows</h3>
            <p class="text-neutral-600">Create tailored assessment workflows that integrate with your existing hiring process.</p>
          </div>
          
          <!-- Feature 6 -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-3 text-neutral-800">Seamless Integration</h3>
            <p class="text-neutral-600">Integrate with your ATS, HRIS, and other HR systems for a seamless workflow.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Video Section -->
    <section class="py-20 bg-neutral-900 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
            {{ $t('home.video.title') }}
          </h2>
          <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
            {{ $t('home.video.subtitle') }}
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto relative rounded-lg overflow-hidden shadow-2xl">
          <div class="aspect-w-16 aspect-h-9 bg-neutral-800 flex items-center justify-center">
            <!-- Video thumbnail -->
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="Video Thumbnail" class="w-full h-full object-cover" />
            
            <!-- Play button overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
              <button class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors transform hover:scale-110 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-20 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4 text-neutral-800">
            {{ $t('home.testimonials.title') }}
          </h2>
          <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
            {{ $t('home.testimonials.subtitle') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
              <div>
                <h3 class="font-heading font-bold text-neutral-800">Sarah Johnson</h3>
                <p class="text-neutral-500 text-sm">HR Director, TechCorp</p>
              </div>
            </div>
            <p class="text-neutral-600 mb-4">"This platform has transformed our hiring process. We're able to make more informed decisions and our candidate experience has improved dramatically."</p>
            <div class="flex text-accent-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
              <div>
                <h3 class="font-heading font-bold text-neutral-800">Michael Chen</h3>
                <p class="text-neutral-500 text-sm">Talent Acquisition Manager, GlobalCo</p>
              </div>
            </div>
            <p class="text-neutral-600 mb-4">"The detailed analytics and reporting have given us insights we never had before. Our quality of hire has improved significantly since implementing this solution."</p>
            <div class="flex text-accent-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
              <div>
                <h3 class="font-heading font-bold text-neutral-800">Emily Rodriguez</h3>
                <p class="text-neutral-500 text-sm">Recruitment Lead, StartupX</p>
              </div>
            </div>
            <p class="text-neutral-600 mb-4">"We've been able to reduce our time-to-hire by 40% while improving the quality of our candidates. The platform is intuitive and our team was able to get up and running quickly."</p>
            <div class="flex text-accent-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Security Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4 text-neutral-800">
              {{ $t('home.security.title') }}
            </h2>
            <p class="text-xl text-neutral-600 mb-8">
              {{ $t('home.security.subtitle') }}
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-neutral-700">{{ $t('home.security.feature1') }}</span>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-neutral-700">{{ $t('home.security.feature2') }}</span>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-neutral-700">{{ $t('home.security.feature3') }}</span>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-neutral-700">{{ $t('home.security.feature4') }}</span>
              </div>
            </div>
            
            <div class="mt-8">
              <NuxtLink :to="localePath('/security')" class="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors">
                {{ $t('common.learnMore') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>
          
          <div class="md:w-1/2">
            <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg" alt="Security Image" class="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-primary-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to transform your assessment process?</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">Join thousands of companies that are making better hiring decisions with our platform.</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <NuxtLink :to="localePath('/request-demo')" class="bg-white hover:bg-neutral-100 text-primary-700 font-bold py-3 px-8 rounded-lg text-center transition-colors">
            {{ $t('header.requestDemo') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/try-free')" class="bg-accent-300 hover:bg-accent-400 text-neutral-900 font-bold py-3 px-8 rounded-lg text-center transition-colors">
            {{ $t('header.tryFree') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
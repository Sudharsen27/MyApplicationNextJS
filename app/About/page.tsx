export default function About() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">About</h1>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our about page. Here you can learn more about us and our missions.
        </p>
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
            Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, 
            nec aliquam nisl nisl sit amet nisl.
          </p>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team consists of passionate individuals dedicated to creating exceptional experiences.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {/* Team member cards could go here */}
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
    <img
      src="/Images/member.jpg"
      alt="Team Member"
      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-lg font-medium text-gray-900 text-center">Team Member</h3>
    <p className="text-gray-600 text-center mt-2">Position</p>
  </div>
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
    <img
      src="/Images/member.jpg"
      alt="Team Member"
      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-lg font-medium text-gray-900 text-center">Team Member</h3>
    <p className="text-gray-600 text-center mt-2">Position</p>
  </div>
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
    <img
      src="/Images/member.jpg"
      alt="Team Member"
      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-lg font-medium text-gray-900 text-center">Team Member</h3>
    <p className="text-gray-600 text-center mt-2">Position</p>
  </div>
</div>


        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Feel free to reach out to us with any questions or inquiries.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600">✉️</span>
              </div>
              <span className="text-gray-700">example@email.com</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600">📞</span>
              </div>
              <span className="text-gray-700">(123) 456-7890</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
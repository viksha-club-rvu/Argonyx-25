import imageurl from "@/assets/argonyx24/volunteers.jpg";

const Volunteer = () =>{
   return(
    <section>
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-orbitron font-black text-gradient mb-3 sm:mb-4">
                ARGONYX '24 Volunteers
            </h2> 
        </div>
        <div className="max-w-xl mx-auto relative z-10">
            <div 
                key= "1"
                className="glass-card overflow-hidden group hover-glow transition-all duration-500 hover:scale-105"
            >
                <div className="relative overflow-hidden">
                <img 
                    src= {imageurl}
                    alt="volunteers24"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-orbitron font-semibold text-black dark:text-white">
                        Volunteers 24
                    </h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
   );
}

export default Volunteer;
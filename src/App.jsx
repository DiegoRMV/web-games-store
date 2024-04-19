import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="h-[90vh] flex gap-8 pl-2 md:pl-8">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll pr-2 md:pr-8">
          {/* Portada */}
          <div className="rounded-2xl mb-4">
            <img
              src="https://www.imagecampus.edu.ar/wp-content/uploads/2022/05/Videojuegos-para-Periodistas-Banner-Portada.jpg"
              className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"
            />
          </div>
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-center flex-wrap gap-8">
            <Card
              img="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
              title="Marvel's Spider-Man"
              category="PS5"
              price="51"
            />
            <Card
              img="https://m.media-amazon.com/images/I/91OWgMrKsQL.jpg"
              title="Little Nightmares II"
              category="PS4"
              price="40"
            />
            <Card
              img="https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png"
              title="Ghost of Tsushima"
              category="PS4"
              price="48"
            />
            <Card
              img="https://media.vandal.net/m/82925/call-of-duty-warzone-20203102215835_1.jpg"
              title="Call of Duty: Warzone"
              category="PC"
              price="60"
            />
            <Card
              img="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
              title="Fifa 22"
              category="Xbox Series X"
              price="120"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

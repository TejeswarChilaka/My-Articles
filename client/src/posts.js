import upayoga from "./images/upayoga.jpeg";
import suryakriya from "./images/suryakriya.jpeg";
import angamardhana from "./images/angamardhana.jpeg";

function Posts() {
  return (
    <>
      <div className="post">
        <div className="image">
          <img src={upayoga} alt="Yogic Methods"></img>
        </div>
        <div className="texts">
          <h2>Upa-Yoga</h2>
          <p>
            Upa-Yoga is a simple yet powerful set of ten practices that activate
            the joints, muscles and energy system, bringing ease to the whole
            system. It is a good starting point for those who are new to yoga,
            and can be used as a preparation for other yoga practices. Based on
            a sophisticated understanding of the body’s mechanics.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src={angamardhana} alt="Yogic Methods"></img>
        </div>
        <div className="texts">
          <h2>Angamardana</h2>
          <p>
            Angamardana, a fitness system rooted in yoga, offers everyone the
            opportunity to invigorate the body and reach peak physical and
            mental health. “Angamardana” means gaining complete mastery over the
            limbs, organs, and other parts of the body. True to its name, this
            practice revitalizes the body on all levels including the muscles,
            circulatory system, skeletal structure, nervous system, and the
            basic energy system.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src={suryakriya} alt="Yogic Methods"></img>
        </div>
        <div className="texts">
          <h2>Surya Kriya</h2>
          <p>
            Surya Kriya is a potent yogic practice of tremendous antiquity,
            designed as a holistic process for health, wellness, and complete
            inner wellbeing. “Surya” means “sun,” and “kriya” means “inner
            energy process.” Surya Kriya activates the solar plexus to raise the
            samat prana, or solar heat, in the system. It also balances a
            person’s left and right energy channels, leading to stability of the
            body and stillness of the mind. This strong foundation becomes the
            basis to explore higher dimensions of life.
          </p>
        </div>
      </div>
    </>
  );
}

export default Posts;

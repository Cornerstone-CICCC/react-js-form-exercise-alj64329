import React, {
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

export interface FormData {
  firstname: string;
  lastname: string;
  age: number;
  favoriteFoods: string[];
}

const Form = () => {
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: [],
  });
  const [isShowGreeting, setIsShowGreeting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setIsShowGreeting(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    console.log(e.target);

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        favoriteFoods: !prevState.favoriteFoods.includes(value)
          ? [...prevState.favoriteFoods, value]
          : prevState.favoriteFoods.filter((food) => food !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const resetHandler = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: 0,
      favoriteFoods: [],
    });

    setIsShowGreeting(false);
  };
  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            ref={fnameRef}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            ref={lnameRef}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            ref={ageRef}
          />
        </div>
        <div>
          <div>Favorite Food:</div>
          <div>
            <div>
              <input
                type="checkbox"
                id="favoriteFood"
                name="Chicken"
                value="Chicken"
                checked={formData.favoriteFoods.includes("Chicken")}
                onChange={handleChange}
              />
              <label>Chicken</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="favoriteFood"
                name="Beef"
                value="Beef"
                checked={formData.favoriteFoods.includes("Beef")}
                onChange={handleChange}
              />
              <label>Beef</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="favoriteFood"
                name="Vegetable"
                value="Vegetable"
                checked={formData.favoriteFoods.includes("Vegetable")}
                onChange={handleChange}
              />
              <label>Vegetable</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="favoriteFood"
                name="Dessert"
                value="Dessert"
                checked={formData.favoriteFoods.includes("Dessert")}
                onChange={handleChange}
              />
              <label>Dessert</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="favoriteFood"
                name="Pork"
                value="Pork"
                checked={formData.favoriteFoods.includes("Pork")}
                onChange={handleChange}
              />
              <label>Pork</label>
            </div>
          </div>
        </div>
        <button type="submit">Display User</button>
        <button type="reset" onClick={resetHandler}>
          Clear
        </button>
      </form>

      {isShowGreeting && (
        <div className="output">
          Hello, {formData.firstname} {formData.lastname}. You are{" "}
          {formData.age} years old and your favorite foods are:
          {formData.favoriteFoods.length > 0
            ? formData.favoriteFoods.join(", ")
            : "none"}
        </div>
      )}
    </div>
  );
};

export default Form;

import searchIcon from "../../assets/search-icon.svg";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <>
      <div className="border border-neutral-500 rounded-2xs px-xs w-full max-w-[600px] border-m flex items-center">
        <div className="flex items-center justify-center">
          <img
            src={searchIcon}
            alt="Search Icon"
          />
        </div>
        <input
          type="search"
          value={value}
          onChange={({ target }) => onChange(target.value)}
          placeholder={"Busca en nuestra tienda"}
          className="border-none w-full flex-1 bg-transparent outline-none [&::-webkit-search-cancel-button]:appearance-none"
        />
        {value.length > 0 && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Borrar búsqueda"
            className="text-neutral-500 cursor-pointer px-xs text-2xl"
          >
            ×
          </button>
        )}
      </div>
    </>
  );
}

export default SearchBar;
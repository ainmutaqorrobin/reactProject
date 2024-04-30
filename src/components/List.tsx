import { ListProps } from "../interface";

export function List<T>(props: ListProps<T>) {
  return <ul>{props.items.map(props.renderItem)}</ul>;
}

export function Demo() {
  const users = [
    { id: "u1", name: "Ain" },
    { id: "u2", name: "Mutaqorrobin" },
  ];
  const hobbies = ["Game", "Coding", "Tido"];

  return (
    <main>
      <section>
        <h2>Users</h2>
        <List
          items={users}
          renderItem={(user) => <li key={user.id}>{user.name}</li>}
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List
          items={hobbies}
          renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
        />
      </section>
    </main>
  );
}

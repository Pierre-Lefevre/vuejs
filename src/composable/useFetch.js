import { watch, ref } from "vue";

export function useFetch(url) {
  const state = ref("loading");
  const data = ref(null);

  watch(
    url,
    (urlValue) => {
      (urlValue in useFetch.mock
        ? useFetch.mock[urlValue]()
        : fetch(urlValue, {
            headers: {
              Accept: "application/json",
            },
          }).then((r) => {
            if (r.ok) {
              return r.json();
            }
            throw new Error("Impossible de récupérer le json");
          })
      )
        .then((v) => {
          data.value = v;
          state.value = "idle";
        })
        .catch((e) => {
          state.value = "error";
        });
    },
    { immediate: true }
  );

  return {
    data,
    state,
  };
}

useFetch.mock = {};

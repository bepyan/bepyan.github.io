import { useKBar, VisualState } from 'kbar';
import * as React from 'react';

export const KBAR_LISTBOX = 'kbar-listbox';
export const getListboxItemId = (id: number) => `kbar-listbox-item-${id}`;

export function KBarSearch(
  props: React.InputHTMLAttributes<HTMLInputElement> & {
    defaultPlaceholder?: string;
  },
) {
  const { query, searchQuery, actions, currentRootActionId, activeIndex, showing, options } =
    useKBar((state) => ({
      searchQuery: state.searchQuery,
      currentRootActionId: state.currentRootActionId,
      actions: state.actions,
      activeIndex: state.activeIndex,
      showing: state.visualState === VisualState.showing,
    }));
  const [search, setSearch] = React.useState(searchQuery);

  const { defaultPlaceholder, ...rest } = props;

  React.useEffect(() => {
    query.setSearch('');
    query.getInput().focus();
    return () => query.setSearch('');
  }, [currentRootActionId, query]);

  React.useEffect(() => {
    query.setSearch(search);
  }, [query, search]);

  const placeholder = React.useMemo((): string => {
    const defaultText = defaultPlaceholder ?? 'Type a command or search…';
    return currentRootActionId && actions[currentRootActionId]
      ? actions[currentRootActionId].name
      : defaultText;
  }, [actions, currentRootActionId, defaultPlaceholder]);

  return (
    <input
      {...rest}
      ref={query.inputRefSetter}
      autoFocus
      autoComplete="off"
      role="combobox"
      spellCheck="false"
      aria-expanded={showing}
      aria-controls={KBAR_LISTBOX}
      aria-activedescendant={getListboxItemId(activeIndex)}
      value={search}
      placeholder={placeholder}
      onChange={(event) => {
        props.onChange?.(event);
        setSearch(event.target.value);
        options?.callbacks?.onQueryChange?.(event.target.value);
      }}
      onKeyDown={(event) => {
        props.onKeyDown?.(event);
        if (currentRootActionId && !search && event.key === 'Backspace') {
          const parent = actions[currentRootActionId].parent;
          query.setCurrentRootAction(parent);
        }
      }}
    />
  );
}

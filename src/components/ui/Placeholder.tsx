/**
 * Muestra un texto de configuración. Si está escrito entre corchetes ("[Precio]"),
 * lo resalta como placeholder pendiente de completar.
 */
export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());

export function ConfigText({ value }: { value: string }) {
  if (!isPlaceholder(value)) return <>{value}</>;
  return (
    <span className="placeholder" title="Placeholder: edita este texto en src/config">
      {value}
    </span>
  );
}

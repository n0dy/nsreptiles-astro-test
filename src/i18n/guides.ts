import type { Locale } from '../config/site';

// Vodici "terarijum za vrstu" (srpske putanje) i natpis linka; koriste ih strane vrsta, kompleta i terarijuma.
export const TERRARIUM_GUIDES: Record<string, { href: string; label: Record<Locale, string> }> = {
  'bradata-agama': {
    href: '/terarijumi/terarijum-za-bradatu-agamu.html',
    label: { sr: 'Vodič: terarijum za bradatu agamu', en: 'Guide: bearded dragon terrarium', ru: 'Руководство: террариум для бородатой агамы' },
  },
  'leopard-gekon': {
    href: '/terarijumi/terarijum-za-leopard-gekona.html',
    label: { sr: 'Vodič: terarijum za leopard gekona', en: 'Guide: leopard gecko terrarium', ru: 'Руководство: террариум для леопардового геккона' },
  },
  'loptasti-piton': {
    href: '/terarijumi/terarijum-za-loptastog-pitona.html',
    label: { sr: 'Vodič: terarijum za loptastog pitona', en: 'Guide: ball python terrarium', ru: 'Руководство: террариум для королевского питона' },
  },
};

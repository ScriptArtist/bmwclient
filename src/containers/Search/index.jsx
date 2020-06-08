/* eslint-disable react/forbid-prop-types,no-use-before-define */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadDetails } from 'src/containers/Search/actions';
import PropTypes from 'prop-types';
import Selector from 'src/components/selector';
import { useHistory, useParams } from 'react-router-dom';
import { findSlug } from 'src/helpers/slugsHelper';
import './search.scss';

const SearchPage = ({
  loadDetails: loadDetailsAction,
  terms,
  brands,
  styles
}) => {
  const history = useHistory();
  const params = useParams();
  const slugs = getSlugs(params);

  useEffect(() => {
    loadDetailsAction(slugs);
  }, []);

  const onTermsChanged = (name, value) => {
    slugs[name] = value;
    setSlugs(slugs, history);
  };

  return (
    <div className="search">
      <Selector
        items={terms}
        initOptionLabel="Выберите услугу"
        name="service_slug"
        value={slugs.service_slug}
        onChanged={onTermsChanged}
      />
      <Selector
        items={brands}
        initOptionLabel="Выберите бренд"
        name="brand_slug"
        value={slugs.brand_slug}
        onChanged={onTermsChanged}
      />
      <Selector
        items={styles}
        initOptionLabel="Выберите стиль"
        name="style_slug"
        value={slugs.style_slug}
        onChanged={onTermsChanged}
      />
    </div>
  );
};

function setSlugs(slugs, history) {
  const params = [];

  if (slugs.service_slug) params.push((`s-${slugs.service_slug}`));
  if (slugs.brand_slug) params.push((`b-${slugs.brand_slug}`));
  if (slugs.style_slug) params.push((`st-${slugs.style_slug}`));

  history.push(`/${params.join('/')}`);
}

function getSlugs(params) {
  const slugsList = [params.slug1, params.slug2, params.slug3];

  return {
    service_slug: findSlug(slugsList, 's-'),
    brand_slug: findSlug(slugsList, 'b-'),
    style_slug: findSlug(slugsList, 'st-')
  };
}

SearchPage.propTypes = {
  loadDetails: PropTypes.func.isRequired,
  terms: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  styles: PropTypes.array.isRequired
};

const actions = { loadDetails };

const mapStateToProps = ({ search }) => ({
  terms: search.terms,
  brands: search.brands,
  styles: search.styles
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
